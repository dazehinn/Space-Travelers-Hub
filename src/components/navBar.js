import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav className="navBar">
      <div className="navItems">
        <div id="logo">
          <div className="logoImage" />
          <div className="logoText"> Space Travelers&apos;Hub</div>
        </div>
        {/* <ul className="navLinks">
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="mission">Missions</Link></li>
        <li><Link to="myprofile">| My Profile</Link></li>
      </ul> */}
      </div>
    </nav>
  </header>
);

export default Navbar;
