import React, { memo, Fragment } from 'react';
// import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

import { Banner } from 'Components';
import { usePreload } from 'Hooks';

const Works = memo((props) => {
  usePreload();
  const { t } = useTranslation();

  return (
    <Fragment>
      <Banner
        page="works"
        title={t('home.banner.title')}
        text={t('home.banner.text')}
      />
    </Fragment>
  );
});

// Works.propTypes = {

// }

export default Works;
