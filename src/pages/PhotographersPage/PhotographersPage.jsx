import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import GlobalStyle from '../../theme/GlobalStyle';

import Header from '../../components/Header';
import BaseContainer from '../../components/BaseContainer';
import PhotographerList from '../../components/PhotographerList';
import Loader from '../../components/Loader';

import PhotographerSearch from '../../containers/PhotographerSearch';

import actionTypes from "../../store/constants/actionTypes";

const PhotographersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Photographers';

        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHERS_REQUEST, payload: { category_id: 3 } });
    }, []);

    const [photographers, loading] = useSelector(state => [state.photographers.list, state.photographers.loading]);

    const handleSearch = (filter) => {
        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHERS_REQUEST, payload: filter });
    };

    return (
        <>
            <GlobalStyle />
            <Header />
            <BaseContainer>
                <PhotographerSearch handleSearch={handleSearch} />
                {loading && <Loader />}
                {!loading && <PhotographerList photographers={photographers} />}
            </BaseContainer>
        </>
    );
};

export default PhotographersPage;
