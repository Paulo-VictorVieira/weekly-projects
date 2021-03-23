import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Styles/Layout/Navbar.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={`${styles.navbar} bg-primary`}>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <div className={styles.wrapper}>
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            isMenuOpen && styles.mobileButtonActive
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></button>

        <nav className={`${styles.nav} ${isMenuOpen && styles.menuOpen}`}>
          <ul>
            <li>
              <NavLink to="/" end className="link">
                Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik" className="link">
                Formik
              </NavLink>
            </li>
            <li>
              <NavLink to="/useFormik" className="link">
                Use Formik
              </NavLink>
            </li>
            <li>
              <NavLink to="/masked" className="link">
                Masked
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
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
