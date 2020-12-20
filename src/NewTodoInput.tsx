import React, { ChangeEvent, Fragment, useState } from 'react';
import { v4 as uuid4} from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const NewTodoInput = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const onAddTodo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatch(addTodo({ id: uuid4(), name: todo, isComplete: false }));
        setTodo('');
      }

    return (
        <Fragment>
            <input onChange={updateTodo} value={todo} type="text" name="todo" />
            <button onClick={onAddTodo}>Add</button>
        </Fragment>
    );
};

export default NewTodoInput;