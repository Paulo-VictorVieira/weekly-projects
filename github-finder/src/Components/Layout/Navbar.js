import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About App</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  icon: Proptypes.string.isRequired,
};

export default Navbar;
