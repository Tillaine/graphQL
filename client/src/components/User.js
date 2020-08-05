import React from 'react';
import { useQuery, gql } from '@apollo/client';



const User = ({ userId }) => {
    const USER_QUERY = gql`
    query UsersQuery {
        user(id:${userId}) {
            name
        }
    }
`;

    const { loading, error, data } = useQuery(USER_QUERY);
    if ( loading ) { return <p>loading...</p>};
    if ( error ) { console.log('query error',error)};
    return ( 
    <p><em>@{data.user.name}</em></p>
        )
}


export default User;