import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import Post from './Post.js'

const POSTS_QUERY = gql`
    query PostQuery {
        posts {
            id,
            title, 
            userId
        }
    }
`;



const Posts = () => {
    const { loading, error, data } = useQuery(POSTS_QUERY);
    if ( loading ) { return <p>loading...</p>};
    if ( error ) { console.log('query error',error)};
    return ( 
        <Fragment>
                <h1 className="display-4 my-3">Posts</h1>
                {
                data.posts.map(post => {
                return (
                    <Post key={post.id} post={post}/>
                )
                })
                }
            </Fragment>
        )
}


export default Posts
