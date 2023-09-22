import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation()

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-4'>Hello IM from Home components </h1>
            <Header></Header>
             {navigation.state === 'loading' ?  <p>loading...</p>: <Outlet/> }
            
            <Footer/>
        </div>
    );
};

export default Home;