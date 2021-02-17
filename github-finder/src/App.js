import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Alert from './Components/Layout/Alert';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import User from './Components/User/User';

import GithubState from './Context/GithubContext/GithubState';
import AlertState from './Context/Alert/AlertState';
import NotFound from './Components/Pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
