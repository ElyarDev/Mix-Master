import React from 'react';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
    return (
        <div>
            <nav>NAVBAR</nav>
            {/* <Link to='/about'>About page</Link> */}
            <Outlet />
            <footer>FOOTER</footer>
        </div>
    )
}

export default HomeLayout