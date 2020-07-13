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
            <S.Description>
                {photographerData.description}
            </S.Description>
        </S.Container>
    );
};

export default Photographer;
