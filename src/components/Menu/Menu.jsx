import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { Dialog, MenuList, MenuItem, Box, IconButton, Button } from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';


// eslint-disable-next-line import/no-unresolved
import { routes } from 'Routes/path';
import menuStyles from './styles';


const Menu = ({ open, handleClose }) => {
  const { t, i18n } = useTranslation();
  const [transform, setTransform] = useState(false);
  const classes = menuStyles();

  useEffect(() => {
    let timerId = null;
    if (open) timerId = setTimeout(() => setTransform(true), 0);
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
        <MenuList className={classes.menuList} component="nav">
          {Object.keys(routes).map(route => (
            <MenuItem
              key={route}
              className={classes.link}
              component={NavLink}
              to={routes[route]}
              onClick={handleClose}
            >
              {/* {route} */}
              {t(`navigation.${route}`)}
            </MenuItem>
          ))}
        </MenuList>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button size="medium" className={classes.button} onClick={() => i18n.changeLanguage('ua')}>
            {t('lang.ua')}
          </Button>
          <Button size="medium" className={classes.button} onClick={() => i18n.changeLanguage('ru')}>
            {t('lang.moscal')}
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
