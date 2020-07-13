import React from 'react';

import PhotographerProfileForm from '../../containers/PhotographerProfileForm';
import PhotographerProfilePhotos from '../../containers/PhotographerProfilePhotos';

import * as S from './PhotographerProfile.styled';

const PhotographerProfile = ({ photographerProfileData }) => {
  return (
    <>
      <S.Container>
        <PhotographerProfileForm photographer={photographerProfileData} />
      </S.Container>
      <S.Container>
        <PhotographerProfilePhotos />
      </S.Container>
    </>
  );
};

export default PhotographerProfile;
