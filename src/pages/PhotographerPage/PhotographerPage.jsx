import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import actionTypes from '../../store/constants/actionTypes';

import GlobalStyle from '../../theme/GlobalStyle';

import Header from '../../components/Header';
import BaseContainer from '../../components/BaseContainer';
import Loader from "../../components/Loader/Loader";
import Photographer from '../../components/Photographer';

const PhotographerPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        document.title = 'Photographer';

        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_REQUEST, payload: { id: id } });
    }, []);

    const [loading, photographerData] = useSelector(state => [state.photographer.loading, state.photographer.photographerData]);

    return (
        <>
            <GlobalStyle />
            <Header />
            <BaseContainer>
                {loading && <Loader />}
                {!loading && <Photographer photographerData={photographerData} />}
            </BaseContainer>
        </>
    );
};

export default PhotographerPage;
