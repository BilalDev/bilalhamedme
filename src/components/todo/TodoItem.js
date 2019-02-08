import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render () {
        const completedItemStyle = {
            fontStyle: 'italic',
            color: '#cdcdcd',
            textDecoration: 'line-through'
        };

        return (
            <li className="TodoItem">
                <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)} />
                <p style={this.props.item.completed ? completedItemStyle : null}>{this.props.item.text}</p>
            </li>
        );
    }
}

export default TodoItem;