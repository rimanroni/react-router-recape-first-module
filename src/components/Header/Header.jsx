import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className=''>Navbar </h1>
            <nav className='text-3xl text-center space-x-4'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Users </NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contac'}>Contac Us </NavLink>
            <NavLink to={'/posts'}>My All Post </NavLink>

            </nav>
        </div>
    );
};

export default Header;