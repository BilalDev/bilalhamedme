import React, { Component } from 'react';

class SkillItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <li className={ this.props.className }>
                <span>{ this.props.item.skill }</span>
            </li>
        );
    }
}

export default SkillItem;