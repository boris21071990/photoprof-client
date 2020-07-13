import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actionTypes from '../../store/constants/actionTypes';

import * as S from './PhotoSearch.styled';

import Dropdown from '../../components/Dropdown';

const PhotoSearch = ({ handleSearch }) => {
    const [filter, setFilter] = useState({
        category_id: ''
    });

    const handleSelect = useCallback(filterName => (value) => {
        setFilter({
            ...filter,
            [filterName]: value
        });
    });

    const handleSubmit = () => {
        handleSearch(filter);
    };

    const dispatch = useDispatch();

    const [categoryOptions, setCategoryOptions] = useState([
        {
            name: 'Select category...',
            value: ''
        }
    ]);

    useEffect(() => {
        dispatch({
            type: actionTypes.LOAD_CATEGORIES_REQUEST,
            callbacks: {
                onSuccess: (categories) => {
                    const newCategoryOptions = categories.map((category) => {
                        return {
                            name: category.name,
                            value: category.id
                        }
                    });

                    setCategoryOptions(
                        [
                            ...categoryOptions,
                            ...newCategoryOptions
                        ]
                    );
                }
            }
        });
    }, []);

    return (
        <S.Container>
            <S.DropdownContainer>
                <Dropdown options={categoryOptions} handleSelect={handleSelect('category_id')} />
            </S.DropdownContainer>
            <S.Submit onClick={handleSubmit}>Search</S.Submit>
        </S.Container>
    );
};

export default PhotoSearch;
