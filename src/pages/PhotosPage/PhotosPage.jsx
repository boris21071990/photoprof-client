import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import actionTypes from '../../store/constants/actionTypes';

import BaseLayout from '../../components/BaseLayout';
import BaseContainer from '../../components/BaseContainer';
import PageTitle from '../../components/PageTitle';
import Loader from '../../components/Loader';
import PhotoList from '../../components/PhotoList';
import Pagination from '../../components/Pagination';

import PhotoSearch from '../../containers/PhotoSearch';

const PhotosPage = () => {
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({});

    const loadPhotos = (updatedFilter = {}) => {
        dispatch({
            type: actionTypes.LOAD_PHOTOS_REQUEST,
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
        loadPhotos();

        return () => {
            dispatch({ type: actionTypes.CLEAR_PHOTOS });
        };
    }, []);

    const photos = useSelector((state) => state.photos.data);

    const handleSearch = (updatedFilter) => {
        setFilter(updatedFilter);

        setCurrentPage(1);

        loadPhotos(updatedFilter);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);

        loadPhotos({
            ...filter,
            page: page
        });
    };

    return (
        <BaseLayout>
            <Helmet>
                <title>Photos</title>
            </Helmet>
            <BaseContainer>
                <PageTitle>Photos</PageTitle>
                <PhotoSearch handleSearch={handleSearch} />
                {!photos && <Loader />}
                {photos && <PhotoList photos={photos} />}
                {photos && totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />}
            </BaseContainer>
        </BaseLayout>
    );
};

export default PhotosPage;
