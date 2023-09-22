import React from 'react';
import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const user = useLoaderData()
    const navigation = useNavigation()
    const location = useLocation();
    console.log(location)
     return (
        <div>
          <h1 className='text-3xl font-bold text-gray-400'>Our Users : {user.length} </h1> 
         <p >
         {navigation.state === 'loading' ? <p className='text-center text-4xl mt-5 text-red-500'>loading...</p> :''} 
            </p> 
          <div className='grid grid-cols-1 lg:grid-cols-4'>
            {user.map(user=><User key={user.id} user={user}/>)}
            </div>    
        </div>
    );
};

export default Users;