import React from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import User from './Components/User/User';

function App() {
  return (
    <div>
      <Navbar title="Github Finder" icon="fab fa-github" />
      <div className="container">
        <User />
      </div>
    </div>
  );
}

export default App;
