import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Stats from './pages/stats';
import Map from './pages/map';
import Trucks from './pages/trucks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/map" element={<Map />} />
        <Route path="/trucks" element={<Trucks />} />
      </Routes>
    </Router>
  );
}

export default App;
