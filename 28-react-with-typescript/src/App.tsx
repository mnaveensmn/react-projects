import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {

  const TODO_DATA = [new Todo("Learn React"), new Todo("Learn Typescript")];

  return (
    <div className="App">
      <Todos items={TODO_DATA} />
    </div>
  );
};

export default App;
