import React, { useState } from 'react';
import MyNavBar from '../components/MyNavBar';
import MyHeader from '../components/MyHeader';
import Account from '../views/account/AccountView';

const MyAccount = () => {
  return (
    <div className='page'>
      <MyHeader className='Header'/>
      <MyNavBar/>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='content'>
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;