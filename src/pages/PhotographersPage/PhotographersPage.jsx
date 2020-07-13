import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';

import BaseLayout from '../../components/BaseLayout';
import BaseContainer from '../../components/BaseContainer';
import PhotographerList from '../../components/PhotographerList';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle';
import Pagination from "../../components/Pagination";

import PhotographerSearch from '../../containers/PhotographerSearch';

import actionTypes from "../../store/constants/actionTypes";

const PhotographersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHERS_REQUEST, payload: { page: 1 } });
    }, []);

    const [photographers, loading] = useSelector(state => [state.photographers.list, state.photographers.loading]);

    const [filter, setFilter] = useState({});

    const handleSearch = (updatedFilter, page = 1) => {
        setFilter(updatedFilter);

        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHERS_REQUEST, payload: { ...updatedFilter, page: page } });
    };

    const handlePageChange = (page) => {
        handleSearch(filter, page);
    };

    return (
        <BaseLayout>
            <Helmet>
                <title>Photographers</title>
            </Helmet>
            <BaseContainer>
                <PageTitle>Photographers</PageTitle>
                <PhotographerSearch handleSearch={handleSearch} />
                {loading && <Loader />}
                {!loading && <PhotographerList photographers={photographers} />}
                {photographers && <Pagination currentPage={1} totalPages={5} handlePageChange={handlePageChange} />}
            </BaseContainer>
        </BaseLayout>
    );
};

export default PhotographersPage;
