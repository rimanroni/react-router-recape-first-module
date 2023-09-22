import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const data = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            {
            data.map(data=><Post key={data.id} 
             data={data}
            />)
           }
        </div>
    );
};

export default Posts;