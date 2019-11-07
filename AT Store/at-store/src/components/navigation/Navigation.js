import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
    render = () => (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href="/" style={{'width': '0px'}}>AT-Store</Navbar.Brand>
            <Nav className='mx-auto'> 
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Products</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}