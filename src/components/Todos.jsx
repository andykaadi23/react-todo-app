import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const Todos = ({ todos }) => {
  return (
    <>
      <div>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </>
  );
};
export default Todos;
