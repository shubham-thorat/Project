import React, { useState, useEffect } from 'react'
import Card from '../../components/UI/Card'
import { NavLink } from 'react-router-dom'
import BlogData from '../../data/text.json'
import './style.css'

function RecentPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const posts = BlogData.data
        console.log(posts)
        setPosts(posts)
    }, [posts])

    return (
        <Card style={{ marginBottom: "20px", padding: "5px", boxSizing: "border-box" }}>
            <div className="recentpost">
                <div className="classHeader">
                    <span> Recent Post </span>
                </div>
                <div className="posts" style={{ padding: "0" }}>
                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`} key={post.id} style={{ textDecoration: "none" }}>
                                    <div className="post-link">
                                        <h3> {post.id} . {post.blogTitle} </h3>
                                        <p> {post.postedOn}</p>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </Card>
    )
}

export default RecentPost
