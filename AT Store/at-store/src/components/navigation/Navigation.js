import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    renderLoginButton = () => {
        if (this.props.isLogged) {
            return (
                <Nav>
                    <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Log In/Sing In</Link>
                </Nav>
            )
        }

        return null
    }
    render = () => (
        <Navbar bg='dark' variant='dark'>
            <Link to="/" className="navbar-brand">AT-Store</Link>
            <Nav className='mx-auto'>
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/about" className="nav-link">About</Link>
            </Nav>
            {this.renderLoginButton()}
        </Navbar>
    )
}