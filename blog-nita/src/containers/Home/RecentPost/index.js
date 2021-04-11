import React from 'react'
import './style.css'
import Card from '../../../components/UI/Card'

function RecentPost(props) {
    return (
    
        <Card style={props.style}>
        <div className="post-box">
            <div className="postImageContainer">
                <img src={require(`../../../Images/memories-from.jpg`).default} alt="postImage" />
            </div>
            <div className="blogHeader">
                <span className="blogcategory"> FASHION</span>
                <h1 className="postTitle">Memories From Last Summer </h1>
                <span className="postedBy"> posted onJanuary 07, 2016 bySora Blogging Tips </span>
            </div>
            <div className="postBody">
                <p className="post-message" style={{padding :"0px 20px"}}>
                Neque Cursus Elementum Gravida Faucibus FamesPurus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat tortor natoque ante volutpat Class class platea hymena...
                </p>
                <button className="btn"> Read More </button>
            </div>
        </div>

    </Card>
    )
}

export default RecentPost
