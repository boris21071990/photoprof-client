import React from 'react';

import * as S from './Footer.styled';

const Footer = () => {
    return (
        <S.FooterWrapper>
            <S.FooterContainer>
                <S.FooterColumn>
                    <S.FooterColumnRow>
                        <S.FooterLink to='/'>Home</S.FooterLink>
                    </S.FooterColumnRow>
                    <S.FooterColumnRow>
                        <S.FooterLink to='/photos'>Photos</S.FooterLink>
                    </S.FooterColumnRow>
                    <S.FooterColumnRow>
                        <S.FooterLink to='/photographers'>Photographers</S.FooterLink>
                    </S.FooterColumnRow>
                </S.FooterColumn>
                <S.FooterColumn>
                    <S.FooterText>
                        Looking for a photographer? Photoprof will help you find!
                    </S.FooterText>
                </S.FooterColumn>
            </S.FooterContainer>
        </S.FooterWrapper>
    );
};

export default Footer;
