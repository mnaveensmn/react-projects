import Todo from "../models/todo";
import TodoItem from './TodoItem';

type TodoData = {
    items: Todo[]
}
const Todos: React.FC<TodoData> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem todo={item.text} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
