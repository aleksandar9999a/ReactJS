import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render = () => (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href="/">AT-Store</Navbar.Brand>
            <Nav className='mx-auto'>
                <NavLink to="/home" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Products</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav>
            <Nav className=''>
            <NavLink to="/login" className="btn btn-outline-success my-2 my-sm-0">Log In/Registetion</NavLink>
            </Nav>
        </Navbar>
    )
}