import React from 'react';

import * as S from './PhotoItem.styled';

import PhotoLikes from '../PhotoLikes';
import PhotoViews from '../PhotoViews';
import PhotographerAvatar from "../PhotographerAvatar/PhotographerAvatar";

const PhotoItem = ({ photoUrl, imageUrl, likesCount, viewsCount, photographer }) => {
    return (
        <S.Container>
            <S.PhotoLink to={photoUrl}>
                <S.PhotoImage src={imageUrl} />
            </S.PhotoLink>
            <S.PhotoInformation>
                <PhotoLikes likesCount={likesCount} />
                <S.Photographer>
                    <PhotographerAvatar bordered photographerUrl={photographer.photographerUrl} imageUrl={photographer.imageUrl} />
                </S.Photographer>
                <PhotoViews viewsCount={viewsCount} />
            </S.PhotoInformation>
        </S.Container>
    );
};

export default PhotoItem;
