import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  const {todos,toggleTodo,deleteTodo} = props
  console.log(props)
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
