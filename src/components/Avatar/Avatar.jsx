import React from 'react';

import * as S from './Avatar.styled';

const Avatar = ({ bordered = false, url, imageUrl }) => {
    return (
        <S.AvatarLink to={url}>
            <S.AvatarContainer bordered={bordered}>
                <S.AvatarImage src={imageUrl} />
            </S.AvatarContainer>
        </S.AvatarLink>
    );
};

export default Avatar;
