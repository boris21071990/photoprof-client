import React from 'react';

import * as S from './PhotoList.styled';

import PhotoItem from '../PhotoItem/PhotoItem';

const PhotoList = ({ photos }) => {
  return (
    <S.Container>
      {photos.map((photo, index) => {
        return <PhotoItem key={index} {...photo} />;
      })}
    </S.Container>
  );
};

export default PhotoList;
