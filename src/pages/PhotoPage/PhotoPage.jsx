import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import GlobalStyle from '../../theme/GlobalStyle';

import Header from '../../components/Header';
import BaseContainer from '../../components/BaseContainer';
import Loader from "../../components/Loader";
import Photo from "../../components/Photo";

const PhotoPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        document.title = 'Photographer';

        dispatch({ type: 'LOAD_PHOTO_REQUEST', payload: { id: id } });
    }, []);

    const [loading, photoData] = useSelector(state => [state.photo.loading, state.photo.photoData]);

    return (
        <>
            <GlobalStyle />
            <Header />
            <BaseContainer>
                {loading && <Loader />}
                {!loading && <Photo photoData={photoData} />}
            </BaseContainer>
        </>
    );
};

export default PhotoPage;
