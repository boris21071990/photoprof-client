import React from 'react';

import * as S from './PhotoLikes.styled';

const PhotoLikes = ({ likesCount }) => {
    return (
        <S.LikesContainer>
            <S.LikesIcon size='12' />
            <S.LikesTitle>
                {likesCount}
            </S.LikesTitle>
        </S.LikesContainer>
    );
};

export default PhotoLikes;
