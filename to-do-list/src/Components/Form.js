import React from 'react';
import { v4 } from 'uuid';

const Form = ({ inputText, setInputText, setTodos, setStatus }) => {
  const [error, setError] = React.useState(null);

  const handleInputChange = ({ target }) => {
    setInputText(target.value);
  };

  const handleSelectChange = ({ target }) => {
    setStatus(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText === '') {
      setError('Add one task at a time !');

      setTimeout(() => {
        setError(null);
      }, 5000);
    } else {
      setTodos((todos) => [
        ...todos,
        {
          text: inputText,
          completed: false,
          id: v4(),
        },
      ]);

      setInputText('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add your to do"
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
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Form;
