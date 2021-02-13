import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import axios from 'axios';
import Alert from './Components/Layout/Alert';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  const [state, setState] = React.useState({
    users: null,
    loading: false,
    alert: null,
  });

  // Search Github Users
  const [searchUsers, setSearchUsers] = React.useState('');

  React.useEffect(() => {
    const getUser = async () => {
      if (searchUsers !== '') {
        setState({ loading: true, alert: null });
        const res = await axios.get(
          `https://api.github.com/search/users?q=${searchUsers}&client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
        );
        setState({ users: res.data.items, loading: false, alert: null });
        setSearchUsers('');
      }
    };
    getUser();
  }, [searchUsers]);

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
