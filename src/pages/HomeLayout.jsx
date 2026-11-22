import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomeLayout() {
    return (
        <>
            <Navbar />
            {/* <Link to='/about'>About page</Link> */}
            <Outlet />
            <footer>FOOTER</footer>
        </>
    )
}

export default HomeLayout