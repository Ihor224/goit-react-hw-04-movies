import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.list}>
      <NavLink exact to="/" className={s.link} activeClassName={s.linkActive}>
        Home
      </NavLink>
      <NavLink to={'/movies'} className={s.link} activeClassName={s.linkActive}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
