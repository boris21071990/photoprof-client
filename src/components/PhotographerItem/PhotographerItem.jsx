import React from 'react';

import * as S from './PhotographerItem.styled';

import Avatar from '../../components/Avatar';

const PhotographerItem = ({ photographerUrl, imageUrl, fullName, cityName, photos }) => {
  return (
    <S.Container>
      <S.Information>
        <Avatar url={photographerUrl} imageUrl={imageUrl} />
        <S.Profile>
          <S.LinkToPhotographer to={photographerUrl}>{fullName}</S.LinkToPhotographer>
          <S.CityWrapper>
            <S.CityIcon size="12" />
            <S.CityName>{cityName}</S.CityName>
          </S.CityWrapper>
        </S.Profile>
      </S.Information>
      <S.Photos>
        {photos.map((photo, index) => (
          <S.PhotoLink key={index} to={photo.photoUrl}>
            <img src={photo.smallImageUrl} />
          </S.PhotoLink>
        ))}
      </S.Photos>
    </S.Container>
  );
};

export default PhotographerItem;
