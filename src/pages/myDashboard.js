import React, { useState } from 'react';
import MyNavBar from '../components/MyNavBar';
import MyHeader from '../components/MyHeader';
import Dashboard from '../views/reports/DashboardView';

const MyDashboard = () => {
    
  return (
    <div className='page'>
      <MyHeader className='Header' />
      <MyNavBar/>
    <div className='wrapper'>
        <div className='content-container'>
          <div className='content'>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
