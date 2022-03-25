import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Login from '../src/pages/Login'; 
import Register from '../src/pages/Register';

function App() {
  return (     
        <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<Login />} />
            <Route path="/Signup" element={<Register />} />
        </Routes>              
  );
}

export default App;
