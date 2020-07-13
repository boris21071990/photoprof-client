import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import BaseLayout from '../../components/BaseLayout';
import Loader from '../../components/Loader';
import PhotoItems from '../../components/PhotoItems';

import actionTypes from '../../store/constants/actionTypes';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_PHOTOS_REQUEST, payload: { category_id: 3 } });
    }, []);

    const [photos, loading] = useSelector(state => [state.photos.list, state.photos.loading]);

    return (
        <BaseLayout>
            <Helmet>
                <title>Photoprof - find your photographer</title>
            </Helmet>
            {loading && <Loader />}
            {!loading && <PhotoItems photos={photos} />}
        </BaseLayout>
    );
};

export default HomePage;