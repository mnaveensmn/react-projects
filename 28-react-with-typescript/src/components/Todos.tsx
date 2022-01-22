import Todo from "../models/todo";
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodoData = {
    items: Todo[];
    onRemoveTodo: (todoId: string) => void
}

const Todos: React.FC<TodoData> = (props) => {

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          todo={item.text}
          key={item.id}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
