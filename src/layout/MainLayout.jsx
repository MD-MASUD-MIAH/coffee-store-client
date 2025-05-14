import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../Components/Headers';

const MainLayout = () => {
    return (
        <div>
         <Headers></Headers>
        <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
        </div>
        </div>
    );
};

export default MainLayout;