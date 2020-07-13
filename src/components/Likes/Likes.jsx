import React, { useState } from 'react';

import * as S from './Likes.styled';

const Likes = ({ likesCount = 0, isLiked = false, handleLike = () => {} }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleClick = () => {
    const result = !liked;

    setLiked(result);

    handleLike(result);
  };

  return (
    <S.LikesWrapper onClick={handleClick}>
      <S.LikesIcon size="16" liked={liked} />
      <S.LikesCount liked={liked}>{likesCount}</S.LikesCount>
    </S.LikesWrapper>
  );
};

export default Likes;
