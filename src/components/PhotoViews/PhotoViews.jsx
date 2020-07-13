import React from 'react';

import * as S from './PhotoViews.styled';

const PhotoViews = ({ viewsCount }) => {
    return (
        <S.ViewsContainer>
            <S.ViewsIcon size='12' />
            <S.ViewsTitle>
                {viewsCount}
            </S.ViewsTitle>
        </S.ViewsContainer>
    );
};

export default PhotoViews;
