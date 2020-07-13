import React from 'react';

import * as S from './PhotoItem.styled';

import Avatar from '../Avatar';

const PhotoItem = ({ photoUrl, smallImageUrl, likesCount, viewsCount, photographer }) => {
  return (
    <S.Container>
      <S.PhotoLink to={photoUrl}>
        <S.PhotoImage src={smallImageUrl} />
      </S.PhotoLink>
      <S.PhotoInformation>
        <S.LikesContainer>
          <S.LikesIcon size="12" />
          <S.LikesTitle>{likesCount}</S.LikesTitle>
        </S.LikesContainer>
        <S.Photographer>
          <Avatar bordered url={photographer.photographerUrl} imageUrl={photographer.imageUrl} />
        </S.Photographer>
        <S.ViewsContainer>
          <S.ViewsIcon size="12" />
          <S.ViewsTitle>{viewsCount}</S.ViewsTitle>
        </S.ViewsContainer>
      </S.PhotoInformation>
    </S.Container>
  );
};

export default PhotoItem;
