import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Menu.module.scss';

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isActive ? 'green' : undefined,
  };
};

function Menu() {
  return (
    <div className={styles.Menu}>
      <div className={styles.Menu__logo}>BOOKS</div>
      <div className={styles.Menu__list}>
        <NavLink style={activeStyle} to="." end>
          Home
        </NavLink>
        <NavLink style={activeStyle} to="books">
          Books
        </NavLink>
        <NavLink style={activeStyle} to="about">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
