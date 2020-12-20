import { createStore } from 'redux';
import { todoReducer, TodoState } from './todoReducer';

export const LOCAL_STORAGE_KEY = 'reduxStore';

const localStore = localStorage.getItem(LOCAL_STORAGE_KEY);

const persistedState: TodoState = localStore != null ? JSON.parse(localStore) : { todos: [] };

export const store = createStore(todoReducer, persistedState);