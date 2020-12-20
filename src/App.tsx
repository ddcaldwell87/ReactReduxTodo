import React from 'react';
import './App.css';
import NewTodoInput from './NewTodoInput';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <NewTodoInput />
      <Todos />
    </div>
  );
}

export default App;
