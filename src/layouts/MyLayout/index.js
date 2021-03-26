import React from 'react';
import { Outlet } from 'react-router-dom';
import MyHeader from './MyHeader';

const MyLayout = () => {

  return (
    <div className='root'>
      <MyHeader />
      <div className="wrapper">
        <div className="inner">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLayout;