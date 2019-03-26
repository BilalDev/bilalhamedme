import React, { Component } from 'react';

import { Hidden } from "@material-ui/core";
import logo from './logo.svg';
import './Logo.css';

class Logo extends Component {
    render() {
        return (
            <nav className="Logo-header">
                <Hidden smDown>
                    <img src={logo} className="Logo-logo" alt="logo" />
                </Hidden>
            </nav>
        );
    }
}

export default Logo;