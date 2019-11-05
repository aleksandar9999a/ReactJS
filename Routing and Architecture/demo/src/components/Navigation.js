import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <div className='menu'>
        <Link to='/home' >Home</Link>
        <Link to='/add' >Add Cat Food</Link>
        <Link to='/all' >All Cat Food</Link>
    </div>
)

export default Navigation;
