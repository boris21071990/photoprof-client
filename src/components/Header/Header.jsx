import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Header.styled';

import HeaderAuthentication from '../../containers/HeaderAuthentication';

const Header = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Link to="/">
          <img src="/logo.png" />
        </Link>
      </S.LogoContainer>
      <S.NavigationContainer>
        <S.NavigationLink to="/">Home</S.NavigationLink>
        <S.NavigationLink to="/photos">Photos</S.NavigationLink>
        <S.NavigationLink to="/photographers">Photographers</S.NavigationLink>
      </S.NavigationContainer>
      <HeaderAuthentication />
    </S.Container>
  );
};

export default Header;
