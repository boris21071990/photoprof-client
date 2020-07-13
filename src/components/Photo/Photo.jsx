import React from 'react';

import * as S from './Photo.styled';

const Photo = ({ photoData }) => {
    return (
        <S.Wrapper>
            <S.PhotoContainer>
                <img src={photoData.imageUrl} />
            </S.PhotoContainer>
        </S.Wrapper>
    );
};

export default Photo;