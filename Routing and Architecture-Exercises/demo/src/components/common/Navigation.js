import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render = () => (
        <div id="menu">
            <div className="title">Navigation</div>
            <NavLink className="nav" to='/' activeClassName='active' >Catalog</NavLink>
            <NavLink className="nav" to='' >Create Post</NavLink>
            <NavLink className="nav" to='' >My Posts</NavLink>
            <NavLink className="nav" to='' >About</NavLink>
        </div>
    )
}

