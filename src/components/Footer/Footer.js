import React, { memo } from 'react';
// import PropTypes from 'prop-types'

import { Typography, Box } from '@material-ui/core';

import footerStyles from './styles';

const Footer = memo(() => {
  const classes = footerStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Typography>Footer</Typography>
    </Box>
  );
});

// Footer.propTypes = {

// }

export default Footer;
