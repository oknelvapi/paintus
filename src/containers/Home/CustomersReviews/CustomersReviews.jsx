import React, { memo, useState } from 'react';

// import PropTypes from 'prop-types';
import noPhotos from 'Assets/img/no-photos.svg';

import cx from 'classnames';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import { SimpleScrollDialog } from 'Components';
import { customersReviews } from 'Content/home';

import customersReviewsStyles from './styles';

const ClientReview = ({ customer, rating, photo, text, classes, handleClickOpen }) => (
  <Card className={classes.cardWrap}>
    <CardActionArea className={classes.cardActionWrap} onClick={() => handleClickOpen(text)}>
      <CardContent style={{ alignSelf: 'flex-start' }}>
        <Rating name="size-medium" defaultValue={rating} disabled />
      </CardContent>
      <CardContent className={cx(classes.cardMediaWrap, { [classes.cardNoImage]: !photo })}>
        <CardMedia
          className={cx(classes.cardMedia)}
          src={photo || noPhotos}
          component="img"
          title={customer}
        />
      </CardContent>
      <CardContent className={classes.cardContentWrap}>
        <Typography gutterBottom variant="h5" component="h5" className={classes.title}>{customer}</Typography>
        <Typography className="customer-review" variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);


const CustomersReviews = memo(() => {
  const classes = customersReviewsStyles();
  const [openReview, setOpenReview] = useState({ isOpen: false, text: null });

  const handleClickOpen = (text) => {
    setOpenReview({ isOpen: true, text });
  };

  const handleClose = () => {
    setOpenReview({ isOpen: false, text: null });
  };

  return (
    <Box className={cx(classes.section, classes.spotlight)} component="section">
      <Box component="article" className={classes.inner}>

        <Box flex={1}>
          <Typography className={classes.title} variant="h2">Відгуки наших клієнтів</Typography>
          <Typography className={classes.subtitle}>Реальні відгуки від наших клієнтів. Всі відгуки ви можете прочитати на сторінці Google Maps, ввівши в пошук Paintus kyiv </Typography>
        </Box>

        <Box className={classes.cardsWrap}>
          {customersReviews.map(review => (
            <ClientReview
              key={review.id}
              classes={classes}
              handleClickOpen={handleClickOpen}
              {...review}
            />
          ))}
        </Box>

      </Box>
      <SimpleScrollDialog
        open={openReview.isOpen}
        handleClose={handleClose}
        text={openReview?.text}
        closeButtonTitle="Закрити"

      />
    </Box>
  );
});

// CustomersReviews.propTypes = {

// };

export default CustomersReviews;
