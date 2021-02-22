import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../Context/Auth/AuthContext';
import ContactContext from '../../Context/Contact/ContactContext';

const Navbar = ({ title, icon }) => {
  const authContext = React.useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;

  const contactContext = React.useContext(ContactContext);
  const { clearContacts } = contactContext;

  const handleLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <li>Hello, {user && user.name}</li>
      <li>
        <a href="#!" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        {' '}
        <NavLink to="/register" end className="link" activeClassName="active">
          Register
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink to="/login" end className="link" activeClassName="active">
          Login
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink to="/about" className="link" activeClassName="active">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <nav>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
