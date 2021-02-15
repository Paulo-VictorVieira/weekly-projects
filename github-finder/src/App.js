import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import axios from 'axios';
import Alert from './Components/Layout/Alert';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import User from './Components/User/User';

function App() {
  const [state, setState] = React.useState({
    users: null,
    user: null,
    loading: false,
    alert: null,
  });

  // Search Github Users
  const [searchUsers, setSearchUsers] = React.useState('');

  React.useEffect(() => {
    const getUsers = async () => {
      if (searchUsers !== '') {
        setState({ loading: true, alert: null });
        const res = await axios.get(
          `https://api.github.com/search/users?q=${searchUsers}&client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
        );
        setState({ users: res.data.items, loading: false, alert: null });
        setSearchUsers('');
      }
    };
    getUsers();
  }, [searchUsers]);

  // Get Single Github User
  const getUser = async (username) => {
    setState({ loading: true, alert: null });
    if (username) {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
      );
      setState({ user: res.data, loading: false, alert: null });
    }
  };

  // Clear Users from state
  const clearUsers = () => {
    setState({ users: null, loading: false, alert: null });
    setSearchUsers('');
  };

  // Set Alert
  const setAlert = (msg, type) => {
    setState({ alert: { msg, type } });
    setTimeout(() => setState({ alert: null }), 3000);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={state.alert} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  users={state.users}
                  loading={state.loading}
                  setSearchUsers={setSearchUsers}
                  clearUsers={clearUsers}
                  setAlert={setAlert}
                  showClear={state.users !== null ? true : false}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/user/:login"
              element={
                <User
                  getUser={getUser}
                  user={state.user}
                  loading={state.loading}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
