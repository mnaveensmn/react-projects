import React from 'react';
import classes from './TodoItem.module.css';

type Todo = {
  todo: string;
  onRemoveTodo: () => void;
};

const TodoItem: React.FC<Todo> = (props) => {
    return (
      <li className={classes.item} onClick={props.onRemoveTodo}>
        {props.todo}
      </li>
    );
}

export default TodoItem;