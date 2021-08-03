import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box, Typography, CardMedia } from '@material-ui/core';
import sectionStyles from './styles';

const Section = memo(({ idx, isOdd, title, subtitle, photoUrl }) => {
  const classes = sectionStyles();
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Box
      component="section"
      className={cx(classes.section, classes.spotlight, { [classes.style2]: idx + 1 === 2 }, { [classes.style3]: idx + 1 === 3 })}
    >
      <Box component="article" className={cx(classes.inner, { [classes.innerReverse]: !isOdd })}>
        <Box flex={1} textAlign={(!isOdd && matches) || (isOdd && !matches) ? 'left' : 'right'}>
          <Typography className={classes.title} variant="h2">{title}</Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </Box>
        <Box>
          <CardMedia
            title={title}
            image={photoUrl}
            className={cx(classes.image, { [classes.imageReverse]: !isOdd })}
          />
        </Box>
      </Box>
    </Box>
  );
});

Section.propTypes = {
  isOdd: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

Section.defaultProps = {
  isOdd: true
};

export default Section;
