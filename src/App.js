import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup2 from './components/Signup2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
    
        <Route path="/signup2" element={<Signup2 />} />
      </Routes>
    </Router>
  );
}

export default App;
