import React, { Fragment } from 'react';
import { TodoElement } from './Interfaces';

interface TodoProps {
    todo: TodoElement;
}

const Todo: React.FC<TodoProps> = ({ todo }: { todo: TodoElement }) => {
    return (
        <Fragment>
            <input type="checkbox"/>
            <li>{todo.name}</li>
        </Fragment>
    )
}

export default Todo;