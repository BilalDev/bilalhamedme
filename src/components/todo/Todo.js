import React, { Component } from 'react';

import TodoItem from './TodoItem';
import todosData from './todosData';

class Todo extends Component {
    render () {
        const todosItem = todosData.map(item => <TodoItem key={item.id} item={item} />);

        return (
            <ul className="Todo">
                {todosItem}
            </ul>
        );
    }
}

export default Todo;