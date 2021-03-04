import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';

const App = () => {
  React.useEffect(() => {
    // Init Materialize JV
    M.AutoInit();
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </div>
  );
};

export default App;
