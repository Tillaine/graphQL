import { useState, useEffect } from 'react'

const useUpdate = () => {
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')

    const POST_QUERY = gql`
    query PostQuery {
        post(id:${match.params.id}) {
            title, 
            body
        }
    }
    `;
    

    const { loading, error, data } = useQuery(POST_QUERY);
    if ( loading ) { return <p>loading...</p>};
    if ( error ) { console.log('query error',error)};
    const { body, title, id } = data.post;
    setBody(body)
    setTitle(title)

    return [body, title]
}

module.export = useUpdate;