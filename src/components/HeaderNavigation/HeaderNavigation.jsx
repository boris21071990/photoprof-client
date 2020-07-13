import React from 'react';

import * as S from './HeaderNavigation.styled';

const HeaderNavigation = () => {
    return (
        <S.Container>
            <S.NavigationLink to='/'>
                Home
            </S.NavigationLink>
            <S.NavigationLink to='/photos'>
                Photos
            </S.NavigationLink>
            <S.NavigationLink to='/photographers'>
                Photographers
            </S.NavigationLink>
        </S.Container>
    );
};

export default HeaderNavigation;
