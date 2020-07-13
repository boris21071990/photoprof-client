import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import BaseLayout from '../../components/BaseLayout';
import BaseContainer from '../../components/BaseContainer';
import PhotographerProfile from '../../components/PhotographerProfile';
import Loader from '../../components/Loader';

import actionTypes from '../../store/constants/actionTypes';

const PhotographerProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_PROFILE_REQUEST });

    return () => {
      dispatch({ type: actionTypes.CLEAR_PHOTOGRAPHER_PROFILE });
    };
  }, []);

  const photographerProfileData = useSelector((state) => state.photographerProfile.data);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <BaseLayout>
        <BaseContainer>
          {!photographerProfileData && <Loader />}
          {photographerProfileData && <PhotographerProfile photographerProfileData={photographerProfileData} />}
        </BaseContainer>
      </BaseLayout>
    </>
  );
};

export default PhotographerProfilePage;
