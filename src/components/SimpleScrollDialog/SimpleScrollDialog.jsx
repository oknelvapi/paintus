import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const SimpleScrollDialog = memo(({
  open,
  title,
  text,
  handleClose,
  handleSubmit,
  closeButtonTitle,
  submitButtonTitle,
  submitButtonColor,
  cancelButtonColor
}) => {
  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <If condition={title}>
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
      </If>
      <DialogContent>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <If condition={submitButtonTitle}>
          <Button onClick={handleSubmit} color={submitButtonColor}>
            {submitButtonTitle}
          </Button>
        </If>
        <If condition={closeButtonTitle}>
          <Button onClick={handleClose} color={cancelButtonColor}>
            {closeButtonTitle}
          </Button>
        </If>

      </DialogActions>
    </Dialog>
  );
});

SimpleScrollDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  closeButtonTitle: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  submitButtonColor: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  cancelButtonColor: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary'])
};

SimpleScrollDialog.defaultProps = {
  open: false,
  handleClose: () => { },
  handleSubmit: () => { },
  title: '',
  text: '',
  closeButtonTitle: '',
  submitButtonTitle: '',
  submitButtonColor: 'primary',
  cancelButtonColor: 'default'
};

export default SimpleScrollDialog;
