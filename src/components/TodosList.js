import React from 'react';
import TodoItem from 'components/TodoItem';

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul className="list">
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
