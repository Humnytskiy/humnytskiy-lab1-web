import React from 'react';
// ІМПОРТУЄМО НАШІ ДВІ СТОРІНКИ ДЛЯ ВИКОРИСТАННЯ
import MyDashboard from 'src/pages/myDashboard';
import MyAccount from 'src/pages/myAccount';

// Шляхи(routes) нашого маршрутизатора
const routes = [
  {
    path: '/',
    element: <MyDashboard />
  },
  {
    path: '/account',
    element: <MyAccount />
  }
  
];

export default routes;
