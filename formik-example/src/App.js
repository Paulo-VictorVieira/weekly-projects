import React from 'react';
import './App.css';
import Names from './Components/Formik/Names';
import Forms from './Components/Form/Forms';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';

const initialData = [
  {
    id: 1,
    firstName: 'Paulo',
    lastName: 'Victor',
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Forms initialData={initialData} />} />
          <Route path="/formik" element={<Names initialData={initialData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
