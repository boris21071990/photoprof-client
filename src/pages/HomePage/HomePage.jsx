import React from 'react';
import { Helmet } from 'react-helmet';

import BaseLayout from '../../components/BaseLayout';
import BaseContainer from '../../components/BaseContainer';

import RecentPhotos from '../../containers/RecentPhotos';
import RecentPhotographers from '../../containers/RecentPhotographers';

const HomePage = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Photoprof - find your photographer</title>
      </Helmet>
      <BaseContainer>
        <RecentPhotos />
        <RecentPhotographers />
      </BaseContainer>
    </BaseLayout>
  );
};

export default HomePage;
