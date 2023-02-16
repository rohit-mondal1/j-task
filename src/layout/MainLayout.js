import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const MainLayout = () => {
    return (
        <div>
            <Header/>

            <div className='min-h-screen'>
                <Outlet/>
            </div>

            <Footer/>
            
        </div>
    );
};

export default MainLayout;