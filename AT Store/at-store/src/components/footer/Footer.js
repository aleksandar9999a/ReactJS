import React, { Component } from 'react';

export default class Footer extends Component {
    render = () => (
        <footer className="page-footer font-small special-color-dark bg-dark pt-1 fixed-bottom">
            <div className="footer-copyright text-light text-center py-3">© 2019 Copyright:
                 AT-Store.com
            </div>
        </footer>
    )
}