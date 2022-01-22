import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

type TodoAddition = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<TodoAddition> = (props) => {
  
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHanlder = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
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