import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            activeClassName={styles.active}
            className={styles.link}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
