import React from 'react';

import * as S from './PhotographerAvatar.styled';

const PhotographerAvatar = ({ bordered, photographerUrl, imageUrl }) => {
    return (
        <S.AvatarLink to={photographerUrl}>
            <S.AvatarImageContainer bordered={bordered}>
                <S.AvatarImage src={imageUrl} />
            </S.AvatarImageContainer>
        </S.AvatarLink>
    );
};

export default PhotographerAvatar;
