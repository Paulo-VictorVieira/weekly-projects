import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Alerts from './Components/Layout/Alerts';
import ProtectedRoute from './Components/Layout/ProtectedRoute';

// Context States
import ContactState from './Context/Contact/ContactState';
import AuthState from './Context/Auth/AuthState';
import AlertState from './Context/Alert/AlertState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <ProtectedRoute path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
