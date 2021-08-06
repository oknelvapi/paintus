import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Box } from '@material-ui/core';
import { Header, Menu, Footer, ScrollTop } from 'Components';
import rootStyles from 'StylesRoot';

import { SettingsProvider } from './settingsReducer';


const Root = memo(({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = rootStyles();

  const handleClickOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <SettingsProvider>
        <Container id="container" className={openMenu ? classes.blurred : undefined} maxWidth={false} disableGutters>
          <Box
            height="1"
            width="1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Header handleClickOpenMenu={handleClickOpenMenu} />
            <Box component="main" flexGrow={1}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Container>
        <Menu open={openMenu} handleClose={handleCloseMenu} />
        <ScrollTop />
      </SettingsProvider>
    </>
  );
});

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.elementType,
  ])
};

Root.defaultProps = {
  children: null
};

export default Root;
