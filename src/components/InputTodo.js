import React, { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const success = document.querySelector('.success');
  const warn = document.querySelector('.warn');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      success.style.display = 'block';
      success.innerHTML = 'todo added to the list successfully.';
      setTitle('');
      warn.style.display = 'none';
    } else {
      warn.style.display = 'block';
      warn.innerHTML = 'Inserting empty todo is not allowed. Please add item';
      success.style.display = 'none';
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
