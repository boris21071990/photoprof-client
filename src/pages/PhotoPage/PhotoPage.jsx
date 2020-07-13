import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import BaseLayout from '../../components/BaseLayout';
import BaseContainer from '../../components/BaseContainer';
import Loader from "../../components/Loader";
import Photo from "../../components/Photo";

import actionTypes from "../../store/constants/actionTypes";

const PhotoPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_PHOTO_REQUEST, payload: { id: id } });
    }, []);

    const [loading, photoData] = useSelector(state => [state.photo.loading, state.photo.photoData]);

    return (
        <BaseLayout>
            <Helmet>
                <title>Photo</title>
            </Helmet>
            <BaseContainer>
                {loading && <Loader />}
                {!loading && photoData && <Photo photoData={photoData} />}
            </BaseContainer>
        </BaseLayout>
    );
};

export default PhotoPage;
