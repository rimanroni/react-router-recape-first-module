import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, email , id, phone} = user
    return (
        <div className='border-2 text-center border-blue-500 p-4 rounded-lg text-2xl font-semibold m-4'>
            <h1>  {name}</h1>
            <h2 >  {email.slice(0,10)}</h2>
            <h3>User   {phone}</h3>
            <Link  to={`/user/${id}`}>Show User Data </Link>
            <Link to={`/user/${id}`}>
             <button>show user </button>
            </Link>
        </div>
    );
};

export default User;