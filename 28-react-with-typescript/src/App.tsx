import React from 'react';
import './App.css';
import Todos from './components/Todos';

const TODO_DATA = ['Learn React','Learn Typescript'];

const App = () => {
  return (
    <div className="App">
      <Todos items={TODO_DATA} />
    </div>
  );
};

export default App;
