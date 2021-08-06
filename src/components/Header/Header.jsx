import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import cx from 'classnames';

import { Typography, Box, Button, Link, IconButton, useScrollTrigger } from '@material-ui/core';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import headerStyles from './styles';


const Header = memo(({ handleClickOpenMenu }) => {
  const classes = headerStyles();
  const { t } = useTranslation();
  const trigger = useScrollTrigger({
    // options.target (Node [optional]): Defaults to window.
    disableHysteresis: true, // Defaults to false. Disable the hysteresis. Ignore the scroll direction when determining the trigger value.
    threshold: 80, // Defaults to 100. Change the trigger value when the vertical scroll strictly crosses this threshold (exclusive).
  });

  return (
    <Box
      className={cx(classes.header, { [classes.alt]: trigger })}
      component="header"
    >
      <Typography variant="subtitle1">
        <Link
          href="/"
          color="textPrimary"
          underline="none"
        >
          PAINTUS
        </Link>
      </Typography>
      <Button
        variant="outlined"
        color="default"
        className={classes.buttonDesktop}
        endIcon={<MenuOutlinedIcon />}
        onClick={handleClickOpenMenu}
      >
        {t('navigation.menu')}
      </Button>
      <IconButton className={classes.buttonMobile} size="medium" onClick={handleClickOpenMenu}>
        <MenuOutlinedIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
});

Header.propTypes = {
  handleClickOpenMenu: PropTypes.func.isRequired
};

export default Header;
