import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';


const MyHeader = () => {
  return (
    <AppBar
      className='AppBar'
    >
      <Toolbar className='Toolbar'>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton className='Toolbar__btn'>
          <NotificationsIcon  className='Toolbar__icon Toolbar__icon_notifications' />
        </IconButton>
        <IconButton className='Toolbar__btn'>
            <InputIcon className='Toolbar__icon Toolbar__icon_input' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

MyHeader.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default MyHeader;
