import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../../style/menu.css'

export default class Navigation extends Component {
    render = () => (
        <div id="menu">
            <div className="title">Navigation</div>
            <NavLink className="nav" to='/' >Home</NavLink>
            <NavLink className="nav" to='/catalog' >Catalog</NavLink>
            <NavLink className="nav" to='' >Create Post</NavLink>
            <NavLink className="nav" to='' >My Posts</NavLink>
            <NavLink className="nav" to='' >About</NavLink>
        </div>
    )
}

