import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Box } from '@material-ui/core/';
import { Header, Menu, Footer } from 'Components';
import { SettingsProvider } from './settingsReducer';

const Root = memo(({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClickOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <SettingsProvider>
        <Container id="container" maxWidth="false" disableGutters>
          <Box
            height="1"
            width="1"
            pt={7}
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
