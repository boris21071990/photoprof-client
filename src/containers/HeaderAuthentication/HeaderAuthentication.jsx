import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderGuest from '../../components/HeaderGuest';
import HeaderUser from '../../components/HeaderUser';

import actionTypes from '../../store/constants/actionTypes';

const HeaderAuthentication = () => {
  const user = useSelector((state) => state.user.current);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_CURRENT_USER_REQUEST });
  }, []);

  return (
    <>
      {user && <HeaderUser user={user} />}
      {!user && <HeaderGuest />}
    </>
  );
};

export default HeaderAuthentication;
