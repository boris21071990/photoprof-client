import React, { useCallback, useState } from 'react';

import * as S from './PhotographerSearch.styled';

import Dropdown from '../../components/Dropdown';

const areaOptions = [
    {
        name: 'Select area...',
        value: 0
    },
    {
        name: 'New York',
        value: 1
    },
    {
        name: 'Paris',
        value: 2
    }
];

const categoryOptions = [
    {
        name: 'Select category...',
        value: 0
    },
    {
        name: 'Wedding',
        value: 1
    },
    {
        name: 'Portrait',
        value: 2
    }
];

const PhotographerSearch = ({ handleSearch }) => {
    const [filter, setFilter] = useState({
        area_id: 0,
        category_id: 0
    });

    const handleSelect = useCallback(filterName => (value) => {
        const updatedFilter = {
            ...filter,
            [filterName]: value
        };

        setFilter(updatedFilter);

        handleSearch(updatedFilter);
    });

    return (
        <S.Container>
            <S.DropdownContainer>
                <Dropdown options={areaOptions} handleSelect={handleSelect('area_id')} />
            </S.DropdownContainer>
            <S.DropdownContainer>
                <Dropdown options={categoryOptions} handleSelect={handleSelect('category_id')} />
            </S.DropdownContainer>
        </S.Container>
    );
};

export default PhotographerSearch;
