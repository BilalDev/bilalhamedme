import React, { Component } from 'react';

import logo from './logo.svg';
import './Logo.css';

class Logo extends Component {
    render () {
        return (
            <nav className="Logo-header">
            	<img src={logo} className="Logo-logo" alt="logo" />
            </nav>
        );
    }
}

export default Logo;