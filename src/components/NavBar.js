import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <dl><NavLink to="/">Home</NavLink></dl>
      <dl><NavLink to="/movies">Movies</NavLink></dl>
      <dl><NavLink to="/actors">Actors</NavLink></dl>
      <dl><NavLink to="/directors">Directors</NavLink></dl>
    </div>
  );
};

export default NavBar;
