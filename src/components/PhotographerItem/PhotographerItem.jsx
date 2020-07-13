import React from 'react';

import * as S from './PhotographerItem.styled';

import PhotographerAvatar from '../../components/PhotographerAvatar';

const PhotographerItem = ({ photographerUrl, imageUrl, fullName, cityName, photos }) => {
    return (
        <S.Container>
            <S.Information>
                <PhotographerAvatar photographerUrl={photographerUrl} imageUrl={imageUrl} />
                <S.Profile>
                    <S.LinkToPhotographer to={photographerUrl}>
                        {fullName}
                    </S.LinkToPhotographer>
                    <S.CityWrapper>
                        <S.CityIcon size='12' />
                        <S.CityName>
                            {cityName}
                        </S.CityName>
                    </S.CityWrapper>
                </S.Profile>
            </S.Information>
            <S.Photos>
                {photos.map((photo, index) => (
                    <S.PhotoLink key={index} to={photo.photoUrl}>
                        <img src={photo.imageUrl} />
                    </S.PhotoLink>
                ))}
            </S.Photos>
        </S.Container>
    );
};

export default PhotographerItem;
