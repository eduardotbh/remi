import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Match from './Match';
import Home from './Home';
import { Footer, TestOne } from './containers';
import { Navbar, Dashboard } from './components';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/match" element={<Match />} />
          <Route path="/app" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<TestOne />} />


        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;