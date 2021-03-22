import React from 'react';
import TodoItem from './TodoItem';

const ToDoList = ({ setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      {filteredTodos.length > 0 ? (
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
        </ul>
      ) : (
        <p>Add some task to do !</p>
      )}
    </div>
  );
};

export default ToDoList;
