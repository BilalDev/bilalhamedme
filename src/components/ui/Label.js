import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = {
    helloParent: {
        marginBottom: '30px'
    },
    hello: {
        backgroundColor: '#61dafb',
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '1px',
        fontWeight: 'bold',
        padding: '10px 30px',
        borderRadius:  '20px 20px 20px 0',
        marginBottom: '30px'
    }
};

class Label extends Component {
    constructor (props) {
        super(props);

        this.state = {
            label: ''
        };
    }
    render () {
        const { classes } = this.props;

        return(
            <div className={ classes.helloParent }>
                <span className={ classes.hello }>Hello I'm</span>
            </div>
        );
    }
}

export default withStyles(style)(Label);