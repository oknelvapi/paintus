import React from 'react';
import PropTypes from 'prop-types';

import { Backdrop as BackdropWrapper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';


const Backdrop = ({ open, children, overflowAll }) => {
  const theme = useTheme();

  return (
    <BackdropWrapper style={{ zIndex: overflowAll ? theme.zIndex.drawer + 1 : theme.zIndex.drawer - 1 }} open={open}>
      {children}
    </BackdropWrapper>
  );
};

Backdrop.propTypes = {
  open: PropTypes.bool,
  overflowAll: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.elementType,
  ]),
};

Backdrop.defaultProps = {
  open: false,
  children: null
};

export default Backdrop;
