import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <nav>
        <ul>
          <li>
            {' '}
            <NavLink to="/" end className="link" activeClassName="active">
              Form
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/formik" className="link" activeClassName="active">
              Formik
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/useFormik" className="link" activeClassName="active">
              Use Formik
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/masked" className="link" activeClassName="active">
              Masked
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Forms',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
