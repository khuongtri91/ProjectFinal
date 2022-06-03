import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Login from '../src/pages/Login'; 
import Register from '../src/pages/Register';
import Postdetail from '../src/pages/Postdetail';
import Post from '../src/pages/PostPage';
import Category from '../src/pages/Category';
import BMI from '../src/pages/BMI';
import BMR from '../src/pages/BMR';
import Profile from '../src/pages/Profile';
import HospitalSearchPage from '../src/pages/HospitalSearchPage';
import ManageAccount from '../src/pages/ManageAccount';
import ManageAccountType from '../src/pages/ManageAccountType';
import ManageUser from '../src/pages/ManageUser';

function App() {
  return (     
        <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<Login />} />
            <Route path="/Signup" element={<Register />} />
            <Route path="/Illness" element={<Postdetail />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/BMR" element={<BMR />} />
            <Route path="/Profile" element={<ManageUser />} />
            <Route path="/HospitalSearch" element={<HospitalSearchPage />} />
            <Route path="/ManageAccount" element={<ManageAccount />} />
            <Route path="/ManageAccountType" element={<ManageAccountType />} />
            <Route path="/ManageUser" element={<ManageUser />} />
        </Routes>              
  );
}

export default App;
