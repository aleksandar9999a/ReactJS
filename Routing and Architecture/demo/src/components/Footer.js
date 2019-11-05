import React from 'react';
import { Route } from 'react-router-dom';

const Footer = () => (
    <div>
        <div>My Footer. 2018 C</div>
        <Route path='/random' render={() => (
            <h4>Owned by Alexander</h4>
        )} />
    </div>
)

export default Footer;
