import React ,{useState,useEffect}from 'react'
import Card from '../UI/Card'
import './style.css'
import BlogData from '../../data/text.json'

function BlogPost(props) {
    // console.log('Blog Post')
    // console.log(props)
    const [post,setPost] = useState({
        "id": "",
        "blogCategory": "",
        "blogTitle" : "",
        "slug": "",
        "postedOn": "",
        "author": "",
        "blogImage": "",
        "blogText": ""

    })
    const [postid,SetPostId] = useState('')
    useEffect(()=>{
        const postId = props.match.params.postid;
        const post = BlogData.data.find(post => post.id == postId)
        setPost(post)
        SetPostId(postId)
    },[post,props.match.params.postid])

    if(post.blogImage === "") return null
    return (
        <div className="blogpost">
            <Card>
                <div className="blogHeader">
                    <span className="blogcategory"> {post.blogCategory}</span>
                    <h1 className="postTitle"> {post.blogTitle}</h1>
                    <span className="postedBy"> posted on {post.postedOn} by {post.author} </span>
                </div>
                <div className="postImageContainer">
                    <img src={require(`../../Images/${post.blogImage}`).default} alt ="postImage"/>
                </div>
                <div>
                    <p className="post-message">
                        {post.blogText}
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost
