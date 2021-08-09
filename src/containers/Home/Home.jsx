import React, { memo, Fragment } from 'react';
// import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

import { articles } from 'Content/home';
import { usePreload } from 'Hooks';

import { Banner, Section } from 'Components';
import CustomersReviews from './CustomersReviews';

const Home = memo(() => {
  const { t } = useTranslation();
  usePreload();

  return (
    <Fragment>
      <Banner
        page="home"
        title={t('home.banner.title')}
        text={t('home.banner.text')}
      />
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
