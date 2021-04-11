import React from 'react'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'
import './style.css'

function Post(props) {
   // console.log('hello world')
   // console.log(props)
    return (
       <section className="container">
          <BlogPost {...props}/>
          <Sidebar style={{width : "100%"}}/>
       </section>
    )
}

export default Post
