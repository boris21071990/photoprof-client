import React from 'react';

import * as S from './Photographer.styled';

const Photographer = ({ photographerData }) => {
    return (
        <S.Container>
            <S.Header>
                <S.Avatar>
                    <img src={photographerData.imageUrl} />
                </S.Avatar>
                <S.Information>
                    <S.FullName>
                        {photographerData.fullName}
                    </S.FullName>
                    <S.CityWrapper>
                        <S.CityIcon size={12} />
                        <S.CityName>
                            {photographerData.cityName}
                        </S.CityName>
                    </S.CityWrapper>
                    <S.Categories>
                        {photographerData.categories.join(', ')}
                    </S.Categories>
                </S.Information>
            </S.Header>
            {photographerData.description && <S.Description>{photographerData.description}</S.Description>}
            <S.Photos>
                {photographerData.photos && photographerData.photos.map(photo => (
                    <S.Photo key={photo.id}>
                        <S.PhotoLink to={photo.photoUrl}>
                            <img src={photo.imageUrl} />
                        </S.PhotoLink>
                    </S.Photo>
                ))}
            </S.Photos>
        </S.Container>
    );
};

export default Photographer;
