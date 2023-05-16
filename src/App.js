import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Profiles from './components/profiles';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="myprofile" element={<Profiles />} />
      </Routes>
    </div>
  );
}
