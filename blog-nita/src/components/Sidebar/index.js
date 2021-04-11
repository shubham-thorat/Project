import React,{useState,useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import BlogData from '../../data/text.json'
import { NavLink } from 'react-router-dom'
import RecentPost from '../../containers/RecentPost'

function SideBar(props) {
    
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const posts = BlogData.data
        console.log(posts)
        setPosts(posts)
    },[posts])

    return (
        <div className="SidebarContainer" style={{width : props.width?props.width:"29%" ,margin:props.margin?props.margin:"0 2px"}}>
            <Card style={{ marginBottom: "20px", padding: "10px 26px", boxSizing: "border-box" }}>
                <div className="classHeader">
                    <span> About us </span>
                </div>
                <div className="profilephoto">
                    <img src={require('../../Images/me1.png').default} alt="Shubham Thorat"></img>
                </div>
                <div className="sidebarBody">
                    <p>
                       Hey there, My name is Shubham Thorat. I am really excited while making <strong> blog-nita</strong> website . I hope you will enjoy these blogs.
                    </p>
                </div>

            </Card>

            <Card style={{ marginBottom: "20px", padding: "10px 26px", boxSizing: "border-box" }}>
                <div className="classHeader">
                    <span> Social Network </span>
                </div>
                <div className="Social-sites-link">
                    <ul className="social-link-tab"> 
                        <li> <a href="#"> <i className="fab fa-instagram"></i></a></li>
                        <li> <a href="#"> <i className="fab fa-google"> </i></a></li>
                        <li> <a href="#"> <i className="fab fa-twitter"> </i></a></li>
                        <li> <a href="#"> <i className="fab fa-linkedin"> </i></a></li>
                    </ul>
                </div>

            </Card>
            
            {/* <Card style={{ marginBottom: "20px" ,padding: "5px", boxSizing: "border-box" }}>
                <div className="classHeader">
                    <span> Recent Post </span>
                </div>
                <div className="posts" style={{padding:"0"}}>
                    {
                        posts.map(post => {
                            return(
                                <NavLink to={`/post/${post.id}`} key={post.id} style={{textDecoration:"none"}}>
                                    <div className="post-link">
                                        <h3>{post.blogTitle} </h3>
                                        <p> {post.postedOn}</p>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>

            </Card> */}
            <RecentPost/>
        </div>

    )
}

export default SideBar
