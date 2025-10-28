import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './MainContent.css';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Users from '../../pages/Users/Users';
import Products from '../../pages/Products/Products';
import Orders from '../../pages/Orders/Orders';

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default MainContent;
