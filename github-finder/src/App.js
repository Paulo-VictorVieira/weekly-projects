import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import axios from 'axios';
import Alert from './Components/Layout/Alert';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import User from './Components/User/User';

const App = () => {
  const [users, setUsers] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [repos, setRepos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState(null);

  // Search Github Users
  const getUsers = async (text) => {
    setLoading(true);
    setAlert(null);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
    );
    setUsers(res.data.items);
    setLoading(false);
    setAlert(null);
  };

  // Get Single Github User
  const getUser = async (username) => {
    setLoading(true);
    setAlert(null);
    if (username) {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
      );
      setUser(res.data);
      setLoading(false);
      setAlert(null);
    }
  };

  // Get users repos
  const getUserRepos = async (username) => {
    setLoading(true);
    setAlert(null);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
    );
    setRepos(res.data);
    setLoading(false);
    setAlert(null);
  };

  // Clear Users from state
  const clearUsers = () => {
    setUsers(null);
    setUser(null);
    setRepos(null);
    setLoading(false);
    setAlert(null);
  };

  // Set Alert
  const getAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  getUsers={getUsers}
                  users={users}
                  loading={loading}
                  clearUsers={clearUsers}
                  setAlert={getAlert}
                  showClear={users !== null ? true : false}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/user/:login"
              element={
                <User
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
