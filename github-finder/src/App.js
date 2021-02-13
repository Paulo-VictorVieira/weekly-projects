import React from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import User from './Components/User/User';
import axios from 'axios';
import Search from './Components/User/Search';
import Alert from './Components/Layout/Alert';

function App() {
  const [state, setState] = React.useState({
    users: null,
    loading: false,
    alert: null,
  });

  // // Getting Github Users
  // React.useEffect(() => {
  //   const get = async () => {
  //     setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
  //     );
  //     setState({ users: res.data, loading: false });
  //   };
  //   get();
  // }, []);

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
    <div>
      <Navbar title="Github Finder" icon="fab fa-github" />
      <div className="container">
        {alert && <Alert alert={state.alert} />}
        <Search
          setSearchUsers={setSearchUsers}
          clearUsers={clearUsers}
          setAlert={setAlert}
          showClear={state.users !== null ? true : false}
        />
        <User users={state.users} loading={state.loading} />
      </div>
    </div>
  );
}

export default App;
