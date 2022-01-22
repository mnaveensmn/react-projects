import React, { useContext, useRef } from 'react';
import classes from './NewTodo.module.css';
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  const submitHanlder = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHanlder} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;