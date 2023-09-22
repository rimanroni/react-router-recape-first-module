import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetils = () => {
    const user = useLoaderData()
    const {name,website,company , id } = user
    return (
        <div className='text-center '>
            <h1 >user id : {id}</h1>
            <h1>Detils About User  </h1>
            <h2>user name : {name}</h2>
            <p>user website : {website}</p>
            <p>user company : {company.name}</p>
        </div>
    );
};

export default UserDetils;