import React from 'react';
import './App.css';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';
import AddBtn from './Components/Layout/AddBtn';
import AddLogModal from './Components/Logs/AddLogModal';
import EditLogModal from './Components/Logs/EditLogModal';
import AddTechModal from './Components/Techs/AddTechModal';
import TechListModal from './Components/Techs/TechListModal';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  React.useEffect(() => {
    // Init Materialize JV
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </div>
    </Provider>
  );
};

export default App;
