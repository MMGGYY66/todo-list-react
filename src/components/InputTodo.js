import React, { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('todo added to the list successfully.');
    } else {
      setMessage('Inserting empty todo is not allowed. Please add item');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        {' '}
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button
          type="submit"
          className="input-submit"
        >
          Submit
        </button>
      </form>
      <span className="warn">{message}</span>
    </>
  );
};

export default InputTodo;
