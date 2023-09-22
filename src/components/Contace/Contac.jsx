import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contac = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Hello Im From Contace Js </h1>
            <button onClick={()=>{
                navigate('/')
            }}>go back home</button>
        </div>
    );
};

export default Contac;