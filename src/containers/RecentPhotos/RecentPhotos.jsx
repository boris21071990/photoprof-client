import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PhotoList from '../../components/PhotoList';
import Loader from '../../components/Loader';

import * as S from './RecentPhotos.styled';

import actionTypes from '../../store/constants/actionTypes';

const RecentPhotos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_RECENT_PHOTOS_REQUEST });
  }, []);

  const photos = useSelector((state) => state.home.recentPhotos);

  return (
    <>
      <S.Title>Recent photos</S.Title>
      {!photos && <Loader />}
      {photos && <PhotoList photos={photos} />}
    </>
  );
};

export default RecentPhotos;
