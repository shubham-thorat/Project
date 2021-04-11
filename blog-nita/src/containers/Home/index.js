import React, { useState, useEffect } from 'react'
import SideBar from '../../components/Sidebar'
import Card from '../../components/UI/Card'
import RecentPost from './RecentPost'
import BlogData from '../../data/text.json'
import './style.css'
import Post from '../Post'


function Home(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const data = BlogData.data
        setPosts(data)
        console.log('Home Blog data')
        console.log(data)
    }, [])

    const galleryheight = 450
    const galleryStyle = {
        height: galleryheight + 'px',
        overflow: 'hidden',
    }
    const clickHandler = (post) => {
           
    }

    const sideImageHeight = galleryheight / 2.5;
    return (
        <div>
            <Card>
                <div className="galleryPost" style={{ galleryStyle }}>
                    <section style={{ width: "70%" }}>
                        <div className="mainsection">
                            <img src={require('../../Images/cestovat-chladny-dno-jednoduchost-2868847.jpg').default}></img>
                        </div>
                    </section>
                    <section style={{ width: "30%" }}>
                        <div className="sideimagewrapper" style={{ height: `${sideImageHeight}px`, position: "relative" }}>
                            <img src={require('../../Images/fitness-blog-post.jpg').default}></img>
                            <h3 style={{ position: "absolute", bottom: "20%", left: "20%" }}> <a> An Enjoyful Day At Beach </a> </h3>
                        </div>
                        <div className="sideimagewrapper" style={{ height: `${sideImageHeight}px`, position: "relative" }}>
                            <img src={require('../../Images/beautiful-&-simple.jpg').default}></img>
                            <h3 style={{ position: "absolute", bottom: "20%", left: "20%" }}> <a>Festival Favourite Look Fashion </a></h3>
                        </div>
                        <div className="sideimagewrapper" style={{ height: `${sideImageHeight}px`, position: "relative" }}>
                            <img src={require('../../Images/memories-from.jpg').default}></img>
                            <h3 style={{ position: "absolute", bottom: "20%", left: "20%" }}> <a> Modern Business Style Look </a></h3>
                        </div>
                    </section>
                </div>
            </Card>
            <section className="lessPopularPost" style={{ marginTop: '10px' }}>
                <div style={{ width: "70%" }}>
                    {
                        posts.map(post => {
                            return (
                                <div key={post.id}>
                                    <Card style={{ marginBottom: "20px" }}>
                                        <div className="post-box">
                                            <div className="postImageContainer">
                                                <img src={require(`../../Images/${post.blogImage}`).default} alt="postImage" />
                                            </div>
                                            <div className="blogHeader">
                                                <span className="blogcategory"> {post.blogCategory}</span>
                                                <h1 className="postTitle">{post.blogTitle} </h1>
                                                <span className="postedBy"> posted {post.postedOn} by {post.author} </span>
                                            </div>
                                           <div className="btn">
                                                <a href={`http://localhost:3000/post/${post.id}`}> Read More</a>
                                           </div>
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <SideBar />
            </section>

        </div>
    )
}

export default Home