import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Profiles from './components/profiles';
import Missions from './components/missions';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="myprofile" element={<Profiles />} />
        <Route exact path="mission" element={<Missions />} />
      </Routes>
    </div>
  );
}
