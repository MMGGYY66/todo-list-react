import React from 'react';
import Header from 'components/Header';
import TodosLogic from 'components/TodosLogic';

const TodoApp = () => (
  <div className="container">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
