import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core";
import SkillItem from './SkillItem';

const styles = theme => ({
    ul: {
        margin: 0,
        padding: 0
    },
    li: {
        margin: '0px 6px',
        borderRadius: '4px',
        marginBottom: '10px',
        padding: '4px 0px',
        display: 'inline-block',
        '& span': {
            border: '1px solid #61dafb',
            padding: '4px 10px',
            borderRadius: '4px'
        }
    }
});

class Skill extends Component {
    render() {
        const { classes } = this.props;
        const skillsItem = this.props.skills.map(skill => <SkillItem className={classes.li} key={skill.id} item={skill} />);

        return (
            <ul className={classes.ul}>
                {skillsItem}
            </ul>
        );
    }
}

Skill.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Skill);