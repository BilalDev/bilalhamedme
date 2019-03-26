import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Hidden, Grid, withStyles, Typography } from "@material-ui/core";

import SvgCircle from '../ui/SvgCircle';
import Skill from '../ui/Skill';
import skillsData from './skillsData';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainGrid: {
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  h2: {
    color: 'white',
    margin: '10px 0'
  },
  h4: {
    color: 'white',
    marginBottom: '30px'
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.layout}>
        <main>
          <Grid container className={classes.mainGrid}>
            <Hidden smDown>
              <Grid md={6}>
                <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="0" fill="#CC583F" width="10" height="250"></rect>
                  <rect x="60" y="0" fill="#ECB447" width="10" height="250"></rect>
                  <rect x="70" y="0" fill="#75C095" width="10" height="250"></rect>
                  <rect x="80" y="0" fill="#5991AA" width="10" height="250"></rect>
                  <rect x="90" y="0" fill="#7D6AAD" width="10" height="250"></rect>

                  <g className="bubbles">
                    <SvgCircle cx="106" cy="254" fill="#ECB447" radius="15" />
                    <SvgCircle cx="90" cy="273" fill="#7D6AAD" radius="7" />
                    <SvgCircle cx="64" cy="260" fill="#ECB447" radius="25" />
                    <SvgCircle cx="40" cy="251" fill="#7D6AAD" radius="20" />
                    <SvgCircle cx="68" cy="258" fill="#CC583F" radius="12" />
                    <SvgCircle cx="50" cy="250" fill="#5991AA" radius="15" />
                    <SvgCircle cx="95" cy="260" fill="#5991AA" radius="8" />
                    <SvgCircle cx="82" cy="250" fill="#75C095" radius="18" />
                  </g>
                </svg>
              </Grid>
            </Hidden>
            <Grid xs={12} sm={12} md={6}>
              <Typography className={classes.h4} variant="h4">About me</Typography>
              <p>Bonjour, moi c'est Bilal, je suis un globbe-trotter/développeur. Je m'intéresse à tous les sujets liés à l'informatique et plus précisement au web. Je joue aussi du piano. Je sais faire</p>

              <Skill type="presentation" skills={skillsData} />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);