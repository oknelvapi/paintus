import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Dialog, MenuList, MenuItem, Box, IconButton, Button } from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

import { routes } from 'Routes/path';
import menuStyles from './styles';


const Menu = ({ open, handleClose }) => {
  const [transform, setTransform] = useState(false);
  const classes = menuStyles();

  useEffect(() => {
    let timerId = null;
    if (open) timerId = setTimeout(() => setTransform(true), 50);
    else setTransform(false);

    return () => clearTimeout(timerId);
  }, [open]);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="menu"
      open={open}
      fullScreen
      className={classes.wrapper}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <MuiDialogContent className={cx(classes.content, { [classes.transform]: transform })}>
        <MenuList className={classes.menuList}>
          {Object.keys(routes).map(route => (
            <MenuItem
              key={route}
              className={classes.link}
              component={NavLink}
              to={routes[route]}
              onClick={handleClose}
            >
              {route}
            </MenuItem>
          ))}
        </MenuList>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button size="medium" className={classes.button}>
            УКР
          </Button>
          <Button size="medium" className={classes.button}>
            РОС
          </Button>
        </Box>
      </MuiDialogContent>
    </Dialog>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Menu;
