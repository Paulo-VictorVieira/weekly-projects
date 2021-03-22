import React from 'react';
import { v4 } from 'uuid';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const handleInputChange = ({ target }) => {
    setInputText(target.value);
  };

  const handleSelectChange = ({ target }) => {
    setStatus(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: v4(),
      },
    ]);

    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select
          className="filter-todo"
          name="todos"
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
