import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './HeaderLogo.styled';

const HeaderLogo = () => {
    return (
        <S.Container>
            <Link to='/'>
                <img src='/logo.png' />
            </Link>
        </S.Container>
    );
};

export default HeaderLogo;
