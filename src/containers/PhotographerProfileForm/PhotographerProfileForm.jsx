import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import * as S from './PhotographerProfileForm.styled';

import Input from '../../components/Fields/Input';
import Textarea from '../../components/Fields/Textarea';
import Select from '../../components/Fields/Select';
import Button from '../../components/Fields/Button';
import ErrorLabel from "../../components/Fields/ErrorLabel";

import actionTypes from '../../store/constants/actionTypes';

const PhotographerProfileForm = ({ photographer }) => {
    const { firstName, lastName, description, cityId } = photographer;

    const [imageUrl, setImageUrl] = useState(photographer.imageUrl);

    const [cities, setCities] = useState([]);

    const [userErrors, setUserErrors] = useState(null);

    const [selectedCityId, setSelectedCityId] = useState(cityId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: actionTypes.LOAD_CITIES_REQUEST,
            callbacks: {
                onSuccess: (cities) => {
                    setCities(cities);
                }
            }
        });
    }, []);

    const inputFileRef = useRef(null);

    const handleAvatarClick = () => {
        inputFileRef.current.click();
    };

    const handleInputFileChange = (e) => {
        const formData = new FormData();

        formData.append('photographer[image]', e.target.files[0]);

        dispatch({
            type: actionTypes.UPDATE_PHOTOGRAPHER_PROFILE_IMAGE_REQUEST,
            payload: formData,
            callbacks: {
                onSuccess: (updatedImageUrl) => {
                    setImageUrl(updatedImageUrl);
                },
                onFailure: (errors) => {
                    setUserErrors(errors);
                }
            }
        });
    };

    const schema = yup.object().shape({
        first_name: yup.string().required('Please, enter the first name'),
        last_name: yup.string().required('Please, enter the last name'),
        city_id: yup.string().required('Please, select the city')
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        dispatch({
            type: actionTypes.UPDATE_PHOTOGRAPHER_PROFILE_REQUEST,
            payload: data,
            callbacks: {
                onSuccess: () => {},
                onFailure: (errors) => {
                    setUserErrors(errors);
                }
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {userErrors && <ErrorLabel center>{userErrors.join(', ')}</ErrorLabel>}
            <S.Row>
                <S.AvatarContainer onClick={handleAvatarClick}>
                    <S.AvatarImage src={imageUrl} />
                    <input ref={inputFileRef} type='file' style={{ display: 'none' }} onChange={handleInputFileChange} />
                </S.AvatarContainer>
            </S.Row>
            <S.Row>
                <Input
                    ref={register}
                    defaultValue={firstName}
                    name='first_name'
                    fullWidth
                    type='text'
                    placeholder='First name'
                />
            </S.Row>
            {errors.first_name && <ErrorLabel>{errors.first_name.message}</ErrorLabel>}
            <S.Row>
                <Input
                    ref={register}
                    defaultValue={lastName}
                    name='last_name'
                    fullWidth
                    type='text'
                    placeholder='Last name'
                />
            </S.Row>
            {errors.last_name && <ErrorLabel>{errors.last_name.message}</ErrorLabel>}
            <S.Row>
                <Select
                    ref={register}
                    name='city_id'
                    fullWidth
                    value={selectedCityId}
                    onChange={(e) => setSelectedCityId(e.target.value)}
                >
                    <option value=''>Select city...</option>
                    {cities.map((city, index) => <option key={index} value={city.id}>{city.name}</option>)}
                </Select>
            </S.Row>
            {errors.city_id && <ErrorLabel>{errors.city_id.message}</ErrorLabel>}
            <S.Row>
                <Textarea
                    name='description'
                    ref={register}
                    fullWidth
                    placeholder='Last name'
                    defaultValue={description}
                />
            </S.Row>
            <S.Row>
                <Button type='submit' fullWidth>
                    Save
                </Button>
            </S.Row>
        </form>
    );
};

export default PhotographerProfileForm;
