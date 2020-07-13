import React from 'react';

import * as S from './PhotographerList.styled';

import PhotographerItem from "../PhotographerItem";

const PhotographersList = ({ photographers }) => {
    return (
        <S.Container>
            {photographers.map((photographer, index) => {
                return (
                    <PhotographerItem key={index} {...photographer} />
                );
            })}
        </S.Container>
    );
};

export default PhotographersList;
