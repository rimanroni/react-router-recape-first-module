import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({data}) => {
    const {userId, id, title , body} = data
    return (
        <div className='text-center items-center align-middle border-2 border-yellow-300 p-3 m-4 '>
            <h1>User Id : {userId}</h1>
            <p>post title : {title}</p>
            
            <Link
              to={`/data/${id}`}
             className='border-2 border-purple-500 p-1 mt-20'>show post Details </Link>
        </div>
    );
};

export default Post;