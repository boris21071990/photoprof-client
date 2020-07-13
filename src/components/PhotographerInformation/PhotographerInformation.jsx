import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './PhotographerInformation.styled';
import Avatar from '../Avatar/Avatar';

const PhotographerInformation = ({ photographer }) => {
  return (
    <S.Wrapper>
      <S.AvatarContainer>
        <Avatar bordered url={photographer.photographerUrl} imageUrl={photographer.imageUrl} />
      </S.AvatarContainer>
      <S.FullNameContainer>
        <Link to={photographer.photographerUrl}>{photographer.fullName}</Link>
      </S.FullNameContainer>
    </S.Wrapper>
  );
};

export default PhotographerInformation;
