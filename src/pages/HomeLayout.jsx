import React from 'react';
import { Link } from 'react-router-dom';

function HomeLayout() {
    return (
        <div>
            <h1>HomeLayout</h1>
            <Link to='/about'>About page</Link>
        </div>
    )
}

export default HomeLayout