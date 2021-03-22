import React from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

const App = () => {
  // States
  const [inputText, setInputText] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState('all');
  const [filteredTodos, setFilteredTodos] = React.useState([]);

  // Run once when the app start
  React.useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);

  React.useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    // Save to local
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="animeLeft">
      <header>To Do List</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
};

export default App;
