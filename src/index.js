// IMPORT БІБЛІОТЕК

// Імпортуємо React фреймворк
import React from 'react';
// Імпортуємо пакет react-dom для рендеру(13 ст.)
import ReactDOM from 'react-dom';
// Імпортуємо бібліотеку react-router-dom для нашої маршрутизації(14 ст.)
import { BrowserRouter } from 'react-router-dom';

// IMPORT ФАЙЛІВ З СЕРЕДОВИЩА
import App from './App';

// Рендерим наш аплікейшин , і вставляємо в елемент з ID root
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

