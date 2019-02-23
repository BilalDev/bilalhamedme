import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Hidden, withStyles } from "@material-ui/core";
import logo from './logo.svg';
import './Logo.css';

const styles = theme => ({
});

class Logo extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { classes } = this.props;

        return (
            <nav className="Logo-header">
                <Hidden smDown>
            	   <img src={logo} className="Logo-logo" alt="logo" />
                </Hidden>
            </nav>
        );
    }
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Logo);