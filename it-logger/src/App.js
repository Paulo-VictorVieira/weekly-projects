import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  React.useEffect(() => {
    // Init Materialize JV
    M.AutoInit();
  }, []);

  return <div>Hello Word</div>;
};

export default App;
