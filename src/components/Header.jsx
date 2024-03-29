import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;