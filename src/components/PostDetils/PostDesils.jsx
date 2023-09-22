import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDesils = () => {
     const {postId} = useParams()
    const data = useLoaderData();
    const {userId, id, title ,body} = data;
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(-1)
    }
    console.log(postId)
    return (
        <div className='border-2 mx-auto m-8 p-7 border-purple-600 text-center text-2xl'>
           <h1>user Post Id : {id}</h1>
           <h3>Post Details : {title}</h3>
           <p>Post Content : {body} </p>
           <button onClick={handleNavigate}>go back </button>
        </div>
    );
};

export default PostDesils;