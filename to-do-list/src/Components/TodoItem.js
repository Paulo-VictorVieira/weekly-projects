import React from 'react';

const TodoItem = ({ text, todo, setTodos }) => {
  const completedHandler = () => {
    setTodos((todos) =>
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  const deleteHandler = () => {
    setTodos((todos) => todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="todo animeSlideLeft">
      <li className={`todo-item  ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completedHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
