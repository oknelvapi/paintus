import React, { memo, Fragment } from 'react';
// import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

import { usePreload } from 'Hooks';

import { articles } from 'Content/offers';
import { Banner, Section } from 'Components';

const Offers = memo((props) => {
  usePreload();
  const { t } = useTranslation();

  return (
    <Fragment>
      <Banner
        page="offers"
        title={t('offers.banner.title')}
        text={t('offers.banner.text')}
      />
      {articles.map((section, idx) => (
        <Section
          key={section.id}
          idx={idx}
          isOdd={!!((idx + 1) % 2)}
          title={t(`offers.${section.name}.title`)}
          subtitle={t('offers.requirements')}
          // subList={t(`offers.${section.name}.text`)}
          subList={t(`offers.${section.name}.text`, { returnObjects: true })}
          photoUrl={section.photoUrl}
        />
      ))}
    </Fragment>
  );
});

// Offers.propTypes = {

// }

export default Offers;
