import React from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import User from './Components/User/User';
import axios from 'axios';
import Search from './Components/User/Search';

function App() {
  const [state, setState] = React.useState({
    users: null,
    loading: false,
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
        setState({ loading: true });
        const res = await axios.get(
          `https://api.github.com/search/users?q=${searchUsers}&client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
        );
        setState({ users: res.data.items, loading: false });
      }
    };
    getUser();
  }, [searchUsers]);

  return (
    <div>
      <Navbar title="Github Finder" icon="fab fa-github" />
      <div className="container">
        <Search setSearchUsers={setSearchUsers} />
        <User users={state.users} loading={state.loading} />
      </div>
    </div>
  );
}

export default App;
