import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import BaseLayout from '../../components/BaseLayout';
import BaseContainer from '../../components/BaseContainer';
import PhotographerProfile from '../../containers/PhotographerProfile';
import Loader from '../../components/Loader';

import actionTypes from "../../store/constants/actionTypes";

const PhotographerProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_PROFILE_REQUEST });
    }, []);

    const photographerProfileData = useSelector(state => state.photographerProfile.photographerProfileData);

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
