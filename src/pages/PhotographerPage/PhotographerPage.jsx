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
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_REQUEST, payload: { id: id } });
    }, []);

    const [loading, photographerData] = useSelector(state => [state.photographer.loading, state.photographer.photographerData]);

    return (
        <BaseLayout>
            <Helmet>
                <title>Photographer</title>
            </Helmet>
            <BaseContainer>
                {loading && <Loader />}
                {!loading && <Photographer photographerData={photographerData} />}
            </BaseContainer>
        </BaseLayout>
    );
};

export default PhotographerPage;
