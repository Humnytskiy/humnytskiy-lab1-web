import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// ІМПОРТУЄМО ПЕВНІ ЮІ ЕЛЕМЕНТИ З БІБЛІОТЕКИ
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
// ІМПОРТУЄМО ПЕВНІ ІКОНКИ З БІБЛІОТЕКИ
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';

// ІМПОРТУЄМО NavItem
import MyNavItem from './MyNavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

// Створюємо масив об*єктів нав-елементів items
const items = [
  {
    // лінк
    href: '/',
    // іконка
    icon: UserIcon,
    // надпис
    title: 'My layout',
    // його клас
    class: "Nav-item"
  },
  {
    href: '/',
    icon: BarChartIcon,
    title: 'Dashboard',
    class: "Nav-item Nav-item--able"
  },
  {
    href: '#',
    icon: UsersIcon,
    title: 'Customers',
    class: "Nav-item Nav-item--disable"
  },
  {
    href: '#',
    icon: ShoppingBagIcon,
    title: 'Products',
    class: "Nav-item Nav-item--disable"
  },
  {
    href: '/account',
    icon: UserIcon,
    title: 'Account',
    class: "Nav-item Nav-item--able"
  },
  {
    href: '#',
    icon: SettingsIcon,
    title: 'Settings',
    class: "Nav-item Nav-item--disable"
  },
  {
    href: '#',
    icon: LockIcon,
    title: 'Login',
    class: "Nav-item Nav-item--disable"
  },
  {
    href: '#',
    icon: UserPlusIcon,
    title: 'Register',
    class: "Nav-item Nav-item--disable"
  },
  {
    href: '#',
    icon: AlertCircleIcon,
    title: 'Error',
    class: "Nav-item Nav-item--disable Nav-item_error"
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const MyNavBar = () => {
  const classes = useStyles();
  const location = useLocation();



  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <MyNavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              className={item.class}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2
        }}
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

MyNavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};



export default MyNavBar;