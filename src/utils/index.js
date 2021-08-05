import React from 'react';
import ImageIcon from '@material-ui/icons/Image';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export function debounce(func, wait, immediate) {
  let timeout;

  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export function getIcon(type) {
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
}

export function clickToCallType(type) {
  switch (type) {
    case 'phone':
      return 'tel:';
    case 'email':
      return 'mailto:';
    case 'facebook':
      return 'https://www.facebook.com/';
    case 'instagram':
      return 'https://www.instagram.com/';
    default:
      return '/';
  }
}
