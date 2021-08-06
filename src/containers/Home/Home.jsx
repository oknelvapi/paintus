import React, { memo, Fragment } from 'react';
// import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

import { articles } from 'Content/home';

import Banner from './Banner';
import Section from './Section';
import CustomersReviews from './CustomersReviews';

const Home = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Banner />
      {articles.map((section, idx) => (
        <Section
          key={section.id}
          idx={idx}
          isOdd={!!((idx + 1) % 2)}
          title={t(`home.${section.name}.title`)}
          subtitle={t(`home.${section.name}.text`)}
          photoUrl={section.photoUrl}
        />
      ))}
      <CustomersReviews />
    </Fragment>
  );
});

// Home.propTypes = {

// }

export default Home;
