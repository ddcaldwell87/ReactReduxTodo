import { TodoElement } from "./Interfaces";

export type Action = {
    type: "ADD_TODO",
    payload: TodoElement
}

export const addTodo = (todo: TodoElement): Action => ({
    type: "ADD_TODO",
    payload: todo
});