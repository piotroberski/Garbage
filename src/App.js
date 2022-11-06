import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Map from './pages/map';
import Trucks from './pages/trucks';
import Stats from './pages/stats/stats';
import StatsSearch from 'pages/stats/statsSearch';
import StatsDetails from 'pages/stats/statsDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/stats" element={<Stats />}>
          <Route index element={<StatsSearch />} />
          <Route path=":truckID" element={<StatsDetails />} />
        </Route>
        <Route path="/map" element={<Map />} />
        <Route path="/trucks" element={<Trucks />} />
      </Routes>
    </Router>
  );
}

export default App;
