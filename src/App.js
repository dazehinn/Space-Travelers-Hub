import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Rockets from './components/Rockets/Rockets';
import Profiles from './components/profiles';
import Missions from './components/Missions/missions';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route exact path="myprofile" element={<Profiles />} />
        <Route exact path="mission" element={<Missions />} />
      </Routes>
    </div>
  );
}
