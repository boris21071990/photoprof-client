import React from 'react';

import * as S from './PhotoItems.styled';

import PhotoItem from "../PhotoItem/PhotoItem";

const PhotoItems = ({ photos }) => {
    return (
        <S.Container>
            {photos.map((photo, index) => {
                return (
                    <PhotoItem
                        key={index}
                        photoUrl={photo.photoUrl}
                        imageUrl={photo.imageUrl}
                        likesCount={photo.likesCount}
                        viewsCount={photo.viewsCount}
                        photographer={photo.photographer}
                    />
                );
            })}
        </S.Container>
    );
};

export default PhotoItems;