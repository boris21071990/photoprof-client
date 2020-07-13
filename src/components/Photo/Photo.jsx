import React from 'react';

import * as S from './Photo.styled';

import Likes from "../Likes";
import PhotographerInformation from "../PhotographerInformation";

const Photo = ({ photoData }) => {
    const handleLike = (isLiked) => {};

    const { photographer } = photoData;

    return (
        <S.Wrapper>
            <S.PhotoContainer>
                <img src={photoData.mediumImageUrl} />
            </S.PhotoContainer>
            <S.InformationContainer>
                <PhotographerInformation photographer={photographer} />
                <Likes likesCount={photoData.likesCount} handleLike={handleLike} />
            </S.InformationContainer>
        </S.Wrapper>
    );
};

export default Photo;