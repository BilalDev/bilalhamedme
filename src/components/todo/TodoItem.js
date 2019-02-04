import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};
    }

    render () {
        return (
            <li className="TodoItem">
                <input type="checkbox" checked={this.props.item.completed} onChange={() => {}} />
                <p>{this.props.item.text}</p>
            </li>
        );
    }
}

export default TodoItem;