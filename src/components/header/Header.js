import React, { Component } from 'react';

import Logo from '../logo/Logo';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <header className="Header">
                <Logo />
            </header>
        );
    }
};

export default Header;