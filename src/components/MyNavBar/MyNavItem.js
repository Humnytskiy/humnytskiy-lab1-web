// Імпортуєм React
import React from 'react';
// Імпортуєм NavLink як RouterLink для використання подальшого переходу по ссилкам
import { NavLink as RouterLink } from 'react-router-dom';
// Імпортуєм PropTypes для використання перевірки типів (так як js не строго типізована)
import PropTypes from 'prop-types';
// Імпортуєм елементи Button та ListItem із UI бібліотеки material-ui
import {
  Button,
  ListItem,
} from '@material-ui/core';

const MyNavItem = ({
  className,
  href,
  icon: Icon,
  title,
}) => {

  return (
    <ListItem
      className={className}
      disableGutters
    >
      <Button
        className='Nav-item__btn'
        component={RouterLink}
        to={href}
      >
        {Icon && (
          <Icon
            className='Nav-item__icon'
            size="20"
          />
        )}
        <span className='Nav-item__title'>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

// Перевіряжм типи данних наших елементів за допомогою бібліотеки PropTypes
MyNavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

// Експортуєм NavItem за замовчуванням
export default MyNavItem;
