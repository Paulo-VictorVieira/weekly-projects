import React from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import User from './Components/User/User';
import axios from 'axios';

function App() {
  const [state, setState] = React.useState({
    users: null,
    loading: false,
  });

  React.useEffect(() => {
    const get = async () => {
      setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENTE_ID}&cliente_secret=${process.env.REACT_APP_GITHUB_CLIENTE_SECRET}`,
      );
      setState({ users: res.data, loading: false });
    };
    get();
  }, []);

  return (
    <div>
      <Navbar title="Github Finder" icon="fab fa-github" />
      <div className="container">
        <User users={state.users} loading={state.loading} />
      </div>
    </div>
  );
}

export default App;
