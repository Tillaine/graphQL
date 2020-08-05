import React from 'react';
import User from './User.js'
const randImage = () => {
    const src =`./gQL${Math.floor(Math.random() * 4) + 1}.png`
    console.log(src)
    return src
};




const Post = ({ post }) => {
    return ( 
    <div className="w-75 card card-body mb-3">
            <div className=" row">
                <div className="col-md-9">
                    <img width="200px" src={`${randImage()}`} alt='staff and customers' />
                    <h3>{post.title}</h3>
                    <User userId={post.userId}/>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Read</button>
                </div>
            </div>
    </div>
        )
}


export default Post;