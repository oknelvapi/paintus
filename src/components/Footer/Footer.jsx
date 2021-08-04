/* eslint-disable max-len */
import React, { memo } from 'react';
// import PropTypes from 'prop-types'

import { Typography, Box, List, ListItem, Link, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';

import { getIcon, clickToCallType } from 'Utils';
import { contacts, copyright } from 'Content/footer';
import Map from '../Map';
import footerStyles from './styles';

const Footer = memo(() => {
  const classes = footerStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Box className={classes.inner}>
        <Box className={classes.titleWrap}>
          <Typography className={classes.title} variant="h2">Зв'язатися з нами</Typography>
          <Typography className={classes.subtitle}>Якщо у вас виникли питання щодо ремонту: час роботи, вартість, термін виконання, технічні консультаці тощо - зв'яжіться та приїжджайте за вказаною адресою і наші спеціалісти з дарістю з Вами поспілкуються!</Typography>
        </Box>
        <Box className={classes.contactsWrap}>
          <Box className={classes.mapWrap}>
            <Map />
          </Box>
          <Box className={classes.contactsInnerWrap}>
            <List>
              {contacts.map(contact => (
                <ListItem key={contact.id}>
                  <ListItemAvatar>
                    <Avatar className={classes.icon}>
                      {getIcon(contact?.icon)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText disableTypography primary={!contact?.link ? contact.text : undefined}>
                    <If condition={contact?.link}>
                      <Link className={classes.link} href={`${clickToCallType(contact.icon)}${contact?.link}`} color="inherit" underline="none">
                        {contact.text}
                      </Link>
                    </If>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <List className={classes.copyrightWrap}>
          {copyright.map((item, index) => (
            <ListItem alignItems="flex-start" key={item.id}>
              <Typography>
                {item?.title}
                {index === 0 ? new Date().getFullYear() : ''}
                <If condition={item?.linkUrl && item?.linkTitle}>
                  <Link href={item?.linkUrl} color="inherit" underline="none">
                    {item?.linkTitle}
                  </Link>
                </If>
              </Typography>
              <Typography />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
});

// Footer.propTypes = {

// }

export default Footer;
