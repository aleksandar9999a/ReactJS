import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render = () => (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href="/">AT-Store</Navbar.Brand>
            <Nav className='mx-auto'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/about">About</NavLink>
            </Nav>
            <Nav className=''>
            <NavLink to="/login">Log In/Registetion</NavLink>
            </Nav>
        </Navbar>
    )
}