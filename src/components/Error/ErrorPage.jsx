import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const  ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div className='text-center text-3xl'>
            <h1>Opps !!!</h1>
              
              <h1 className='text-4xl'>{error.status} {error.statusText}</h1>
               <button onClick={()=>{
                navigate('/')
               }}>go back home</button>
        </div>
    );
};

export default ErrorPage;