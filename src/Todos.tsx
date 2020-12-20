import React from 'react';
import { connect } from 'react-redux';
import { TodoElement } from './Interfaces';
import { TodoState } from './todoReducer';
import Todo from './Todo';

const Todos = ({ todos }: { todos: TodoElement[] }) => {
    return (
        <ul>
            {todos?.map(todo => <Todo todo={todo} />)}
        </ul>
    )
}

const mapStateToProps = (state: TodoState) => ({
    todos: state.todos
})

export default connect(mapStateToProps)(Todos);