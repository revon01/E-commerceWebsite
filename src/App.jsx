import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar.jsx'; 

import ContactPage from './components/Contact/Contact.jsx'
import Cart  from './components/LandingPage/Cart.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Cart" element={<Cart />} />
     </Routes>
      </div>
    </Router>
  );
}

export default App;

