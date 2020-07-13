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
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({});

    const loadPhotographers = (updatedFilter = {}) => {
        dispatch({
            type: actionTypes.LOAD_PHOTOGRAPHERS_REQUEST,
            payload: updatedFilter,
            callbacks: {
                onSuccess: (data) => {
                    setTotalPages(data.totalPages);
                }
            }
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        loadPhotographers();

        return () => {
            dispatch({ type: actionTypes.CLEAR_PHOTOGRAPHERS });
        };
    }, []);

    const photographers = useSelector(state => state.photographers.data);

    const handleSearch = (updatedFilter) => {
        setFilter(updatedFilter);

        setCurrentPage(1);

        loadPhotographers(updatedFilter);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);

        loadPhotographers({
            ...filter,
            page: page
        });
    };

    return (
        <BaseLayout>
            <Helmet>
                <title>Photographers</title>
            </Helmet>
            <BaseContainer>
                <PageTitle>Photographers</PageTitle>
                <PhotographerSearch handleSearch={handleSearch} />
                {!photographers && <Loader />}
                {photographers && <PhotographerList photographers={photographers} />}
                {photographers && totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />}
            </BaseContainer>
        </BaseLayout>
    );
};

export default PhotographersPage;
