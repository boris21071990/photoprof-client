import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Avatar from '../../components/Avatar';

import * as S from './HeaderUser.styled';

import actionTypes from '../../store/constants/actionTypes';

const HeaderUser = ({ user }) => {
  const urls = {
    photographer: '/photographer/profile',
  };

  const url = urls[user.role];

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: actionTypes.LOGOUT_USER_REQUEST,
      callbacks: {
        onSuccess: () => {
          history.push('/');
        },
      },
    });
  };

  return (
    <S.Container>
      <Avatar url={url} imageUrl={user.imageUrl} />
      <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
    </S.Container>
  );
};

export default HeaderUser;
