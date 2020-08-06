import React from 'react';
import User from './User.js';
import { Link } from 'react-router-dom';
const randImage = () => {
    const src =`./gQL${Math.floor(Math.random() * 4) + 1}.png`
    return src
};




const PostItem = ({ post }) => {
    return ( 
    <div className="w-75 card card-body mb-3">
            <div className=" row">
                <div className="col-md-9">
                    <img width="200px" src={`${randImage()}`} alt='staff and customers' />
                    <h3>{post.title}</h3>
                    <User userId={post.userId}/>
                </div>
                <div className="col-md-3">
                    <Link to={`/post/${post.id}`} className="btn btn-secondary">Read</Link>
                </div>
            </div>
    </div>
        )
}


export default PostItem;