import React from 'react';

const TodoContxt = React.createContext({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});