import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import actionTypes from '../../store/constants/actionTypes';

import BaseLayout from '../../components/BaseLayout';
import BaseContainer from '../../components/BaseContainer';
import Loader from "../../components/Loader/Loader";
import Photographer from '../../components/Photographer';

const PhotographerPage = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_REQUEST, payload: { slug: slug } });

        return () => {
            dispatch({ type: actionTypes.CLEAR_PHOTOGRAPHER });
        };
    }, []);

    const photographerData = useSelector(state => state.photographer.data);

    return (
        <BaseLayout>
            <Helmet>
                <title>Photographer</title>
            </Helmet>
            <BaseContainer>
                {!photographerData && <Loader />}
                {photographerData && <Photographer photographerData={photographerData} />}
            </BaseContainer>
        </BaseLayout>
    );
};

export default PhotographerPage;
