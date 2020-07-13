import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';

import * as S from './RecentPhotographers.styled';

import actionTypes from '../../store/constants/actionTypes';

const RecentPhotographers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_RECENT_PHOTOGRAPHERS_REQUEST });
  }, []);

  const photographers = useSelector((state) => state.home.recentPhotographers);

  return (
    <>
      <S.Title>Recent photographers</S.Title>
      {!photographers && <Loader />}
      {photographers && photographers.length > 0 && (
        <S.Photographers>
          {photographers.map((photographer, index) => (
            <S.Photographer key={index}>
              <Link to={photographer.photographerUrl}>
                <img src={photographer.imageUrl} alt="" />
              </Link>
            </S.Photographer>
          ))}
        </S.Photographers>
      )}
    </>
  );
};

export default RecentPhotographers;
