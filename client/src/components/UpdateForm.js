import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useFormState } from 'react-use-form-state';
// import useUpdate from './useUpdate'


// **************************
// queries
// **************************

    
    

const UpdateForm = ({ match, onSubmit }) => {
    
    const [formState, { text }] = useFormState();
    //get post info
   

    
    // useEffect(() => {
    //     document.title = `You clicked ${id} times`;
    //     formState.setField('stateBody', body)
    //   });

    return ( 
        <form onSubmit={() => {console.log('submitted')}}>
            <div>
                <label htmlFor="title">Title</label>
                <input {...text('stateTitle')} required 
                type="title"
                id="title"
                name="title"
                />
            </div>
            <div>
                <label htmlFor="body">Post</label>
                <input {...text('stateBody')} required
                type="body"
                id="body"
                name="body"
                />
            </div>
        </form>
        )
};


export default UpdateForm;