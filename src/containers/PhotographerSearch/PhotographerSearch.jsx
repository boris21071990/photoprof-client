import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actionTypes from '../../store/constants/actionTypes';

import * as S from './PhotographerSearch.styled';

import Dropdown from '../../components/Dropdown';

const PhotographerSearch = ({ handleSearch }) => {
    const [filter, setFilter] = useState({
        city_id: '',
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

    const [cityOptions, setCityOptions] = useState([
        {
            name: 'Select city...',
            value: ''
        }
    ]);

    const [categoryOptions, setCategoryOptions] = useState([
        {
            name: 'Select category...',
            value: ''
        }
    ]);

    useEffect(() => {
        dispatch({
            type: actionTypes.LOAD_CITIES_REQUEST,
            callbacks: {
                onSuccess: (cities) => {
                    const newCityOptions = cities.map((city) => {
                        return {
                            name: city.name,
                            value: city.id
                        }
                    });

                    setCityOptions(
                        [
                            ...cityOptions,
                            ...newCityOptions
                        ]
                    );
                }
            }
        });

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
                <Dropdown options={cityOptions} handleSelect={handleSelect('city_id')} />
            </S.DropdownContainer>
            <S.DropdownContainer>
                <Dropdown options={categoryOptions} handleSelect={handleSelect('category_id')} />
            </S.DropdownContainer>
            <S.Submit onClick={handleSubmit}>Search</S.Submit>
        </S.Container>
    );
};

export default PhotographerSearch;
