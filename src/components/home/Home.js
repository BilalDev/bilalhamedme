import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, withStyles, Typography } from "@material-ui/core";
import { AlternateEmail, Phone, LocationOn, BlurCircular } from '@material-ui/icons';

import imgBilal from '../../img/bilaldev.jpg';
import Label from '../ui/Label';
import Svg from '../ui/Svg';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainGrid: {
    margin: 0
  },
  h2: {
    color: 'white',
    margin: '10px 0'
  },
  h4: {
    color: 'white',
    marginBottom: '30px'
  },
  iconParent: {
    fontSize: '14px',
    marginBottom: '10px',
    '&:hover > svg': {
        color: '#61dafb'
    }
  },
  icon: {
    verticalAlign: 'bottom',
    marginRight: '10px',
    fontSize: '16px',
    color: 'white'
  },
  iconSocialParent: {
    marginTop: '30px',
    paddingLeft: '0',
    '& li': {
        display: 'inline-block',
        marginRight: '10px'
    }
  },
  iconSocial: {
    padding: '10px',
    borderRadius:  '5px',
    '&:hover': {
        color: '#61dafb',
        backgroundColor: 'white'
    }
  },
  imgParent: {
    border: '20px solid rgba(0,0,0,0.9)',
    height: '400px',
    width: '400px',
    margin: '0 auto',
    borderRadius: '50%'
  },
  img: {
    border: '20px solid rgba(0,0,0,0.4)',
    height: '360px',
    width: '360px',
    margin: '0 auto',
    float: 'none',
    textAlign: 'center',
    borderRadius: '50%',
    maxWidth: '100%',
    'height': 'auto'
  }
});

class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.layout}>
                <main>
                    <Grid container className={ classes.mainGrid }>
                        <Grid xs={12} md={6}>
                            <Label />
                            <Typography className={ classes.h2 } variant="h2">Bilal Hamed Abdallah</Typography>
                            <Typography className={ classes.h4 } variant="h4">Développeur - Freelance</Typography>
                            <Grid className={ classes.iconParent }>
                                <AlternateEmail className={ classes.icon } /> <a href="mailto:bilal.hamed.abdallah@gmail.com">bilal.hamed.abdallah@gmail.com</a>
                            </Grid>
                            <Grid className={ classes.iconParent }>
                                <Phone className={ classes.icon } /> <a href="callto:+33666785126">+33 666 785 126</a>
                            </Grid>
                            <Grid className={ classes.iconParent }>
                                <LocationOn className={ classes.icon } /> <a href="http://maps.google.com/?q=80 rue Rouget de Lisle, 92150 Suresnes, France">80 rue Rouget de Lisle, 92150 Suresnes, France</a>
                            </Grid>

                            <ul className={ classes.iconSocialParent }>
                                <li>
                                    <a href="https://www.linkedin.com/in/aslidev/">
                                        <Svg className={ classes.iconSocial } path="linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://app.comet.co/freelancer/profile/46kmJM6wOv">
                                        <BlurCircular className={ classes.iconSocial } />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/bilaldev">
                                        <Svg className={ classes.iconSocial } path="github" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/Sogekiin">
                                        <Svg className={ classes.iconSocial } path="facebook" />
                                    </a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <div className={ classes.imgParent }>
                                <img className={ classes.img } src={imgBilal} alt="bilaldev.jpg" />
                            </div>
                        </Grid>
                    </Grid>
                </main>
            </div>
        );
    }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);