import React from 'react';
// Імпортуєм пакет використання шляхів
import { useRoutes } from 'react-router-dom';
// Потрібний для використання налаштувань певної теми
import { ThemeProvider } from '@material-ui/core';
// Потрібний для відображення графіків
import 'src/mixins/chartjs';
// Імпорттуємо наші шляхи
import routes from 'src/routes';
// Імпорттуємо наші стилі
import './styles/style.css';

const App = () => {
  // запускаєм роутер
  const routing = useRoutes(routes);

  return (
    <ThemeProvider >
      {routing}
    </ThemeProvider>
  );
};

export default App;
