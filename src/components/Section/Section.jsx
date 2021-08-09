import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box, Typography, CardMedia, List, ListSubheader, ListItem, ListItemText } from '@material-ui/core';
import sectionStyles from './styles';

const Section = memo(({ idx, isOdd, title, subtitle, subList, photoUrl }) => {
  const classes = sectionStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const pathname = window.location.pathname;

  return (
    <Box
      component="section"
      className={cx(classes.section, classes.spotlight, { [classes.style2]: (idx + 1) % 2 === 0 }, { [classes.style3]: (idx + 1) % 2 === 1 })}
    >
      <Box component="article" className={cx(classes.inner, { [classes.innerReverse]: !isOdd })}>
        <Box flex={1} textAlign={(!isOdd && matches) || (isOdd && !matches) ? 'left' : 'right'}>
          <Typography className={classes.title} variant="h2">{title}</Typography>
          <Choose>
            <When condition={pathname === '/offers'}>
              <List subheader={<ListSubheader className={classes.subheader} disableSticky>{subtitle}</ListSubheader>}>
                {subList.map((item, index) => (
                  // It's ok using index there, the array is not changeable
                  // eslint-disable-next-line react/no-array-index-key
                  <ListItem key={index} disableGutters>
                    <ListItemText disableTypography>
                      <If condition={!isOdd}>&#8226;&nbsp;</If>
                      {item}
                      <If condition={isOdd}>&nbsp;&#8226;</If>
                    </ListItemText>
                  </ListItem>
                ))}

              </List>
            </When>
            <Otherwise>
              <Typography className={classes.subtitle}>{subtitle}</Typography>
            </Otherwise>
          </Choose>

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
