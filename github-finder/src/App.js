import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Alert from './Components/Layout/Alert';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import User from './Components/User/User';

import GithubState from './Context/GithubContext/GithubState';

const App = () => {
  const [alert, setAlert] = React.useState(null);

  // Set Alert
  const getAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <GithubState>
      <BrowserRouter>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
