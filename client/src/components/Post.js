import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const PostItem = ({ match }) => {

    const POST_QUERY = gql`
    query PostQuery {
        post(id:${match.params.postID}) {
            title, 
            body, 
            id
        }
    }
    `;
    const { loading, error, data } = useQuery(POST_QUERY);
    if ( loading ) { return <p>loading...</p>};
    if ( error ) { console.log('query error',error)};
    const { body, title, id } = data.post;
    return ( 
    <Fragment>
        <div className="w-75 card card-body mb-3">
                <div className=" row">
                    <div className="col-md-9">
                        <img 
                        src={`https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/01/How-to-Be-Happy_1296x728-header-1024x575.jpg?w=1155&h=1528g`} 
                        alt='staff and customers' width="500"/>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary mb-3">Browse</button>
                        <br></br>
                        <Link to={`/update/${id}`} className="btn btn-secondary">Update</Link>
                    </div>
                </div>
        </div>
    </Fragment>
        )
}


export default PostItem;