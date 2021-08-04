/* eslint-disable max-len */
import React, { memo } from 'react';
// import PropTypes from 'prop-types'

import { Typography, Box, List, ListItem, Link, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


import { contacts, copyright } from 'Content/footer';
// import Map from '../Map';
import footerStyles from './styles';

const getIcon = (type) => {
  switch (type) {
    case 'address':
      return <BusinessIcon />;
    case 'phone':
      return <PhoneIphoneIcon />;
    case 'email':
      return <EmailIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'instagram':
      return <InstagramIcon />;
    default:
      return <ImageIcon />;
  }
};

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
            <Typography variant="h2">Карта</Typography>
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
                      <Link className={classes.link} href={`https://www.${contact?.text}`} color="inherit" underline="none">
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
