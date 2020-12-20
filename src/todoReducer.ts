import { Action } from "./actions";
import { TodoElement } from "./Interfaces";

export interface TodoState {
    todos: TodoElement[]
}

const initialState = {
    todos: []
}

export const todoReducer = (state: TodoState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [ ...state.todos, action.payload ]};
        default:
            return state;
    }
}