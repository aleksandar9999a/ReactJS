import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render = () => (
        <nav className="navbar navbar-dark bg-dark">
            <nav className="navbar navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">AT-Store</Link>
            </nav>
        </nav>
    )
}