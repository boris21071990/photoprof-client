import React, { useState } from 'react';

import * as S from './Dropdown.styled';

const Dropdown = ({ options = [], handleSelect }) => {
    const defaultOption = options[0];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedName, setSelectedName] = useState(defaultOption.name);
    const [selectedValue, setSelectedValue] = useState(defaultOption.value);

    const handleOptionSelect = (name, value) => () => {
        setSelectedValue(value);

        setSelectedName(name);

        setIsOpen(false);

        handleSelect(value);
    };

    return (
        <S.Container>
            <S.Button onClick={() => setIsOpen(!isOpen)}>
                {selectedName}
                <S.Icon size={12} />
            </S.Button>
            <S.Options isOpen={isOpen}>
                {options.map(option => (
                    <S.Option key={option.value} onClick={handleOptionSelect(option.name, option.value)}>
                        {option.name}
                    </S.Option>
                ))}
            </S.Options>
        </S.Container>
    );
};

export default Dropdown;
