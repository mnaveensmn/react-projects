import React from 'react';

type Todo = {
    todo: string;
}

const TodoItem: React.FC<Todo> = (props) => {
    return (
      <div>
        <p>{props.todo}</p>
      </div>
    );
}

export default TodoItem;