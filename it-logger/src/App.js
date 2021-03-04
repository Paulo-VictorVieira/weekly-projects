import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';
import AddBtn from './Components/Layout/AddBtn';
import AddLogModal from './Components/Logs/AddLogModal';

const App = () => {
  React.useEffect(() => {
    // Init Materialize JV
    M.AutoInit();
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </div>
  );
};

export default App;
