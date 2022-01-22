import React, { useState } from 'react';
import Todo from '../models/todo';

type TodoContextType = {
    items: Todo[];
    addTodo: (text: string)=>void;
    removeTodo : (id: string)=>void;
}

export const TodoContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider : React.FC = (props)=>{
    const [todos, setTodos] = useState<Todo[]>([]);
 
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== todoId);
      });
    };
  
    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    };

    const contextValue: TodoContextType = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler,
    };
  
    return (
      <TodoContext.Provider value={contextValue}>
        {props.children}
      </TodoContext.Provider>
    );
};

export default TodosContextProvider;