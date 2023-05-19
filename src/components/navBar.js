import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div id="logo">
        <div className="logoImage" />
        <div className="logoText"> Space Travelers&apos;Hub</div>
      </div>
      <div className="navItems">
        <ul className="navLinks">
          <li><NavLink to="/" activeclassname="active">Rockets</NavLink></li>
          <li><NavLink to="mission" activeclassname="active">Missions</NavLink></li>
          <li><NavLink to="myprofile" activeclassname="active">| My Profile</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
