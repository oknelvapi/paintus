import React, { memo, Fragment } from 'react';
// import PropTypes from 'prop-types'

import { articles } from 'Content/home';

import Banner from './Banner';
import Section from './Section';
import CustomersReviews from './CustomersReviews';

const Home = memo(() => (
  <Fragment>
    <Banner />
    {articles.map((section, idx) => (
      <Section
        key={section.id}
        idx={idx}
        isOdd={!!((idx + 1) % 2)}
        title={section.title}
        subtitle={section.subtitle}
        photoUrl={section.photoUrl}
      />
    ))}
    <CustomersReviews />
  </Fragment>
));

// Home.propTypes = {

// }

export default Home;
