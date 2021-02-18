import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  const guestLinks = (
    <>
      <li>
        {' '}
        <NavLink to="/" end className="link" activeClassName="active">
          Home
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
        <ul>{guestLinks}</ul>
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
