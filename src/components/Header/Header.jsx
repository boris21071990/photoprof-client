import React from 'react';

import * as S from './Header.styled';

import HeaderLogo from '../HeaderLogo';
import HeaderNavigation from '../HeaderNavigation';
import HeaderAuthentication from '../HeaderAuthentication';

const Header = () => {
    return (
        <S.Container>
            <HeaderLogo />
            <HeaderNavigation />
            <HeaderAuthentication />
        </S.Container>
    );
};

export default Header;