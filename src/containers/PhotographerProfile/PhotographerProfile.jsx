import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { useDropzone } from 'react-dropzone'

import Input from '../../components/Fields/Input';
import Textarea from '../../components/Fields/Textarea';
import Select from '../../components/Fields/Select';
import Button from '../../components/Fields/Button';
import ErrorLabel from "../../components/Fields/ErrorLabel";

import * as S from './PhotographerProfile.styled';

import actionTypes from "../../store/constants/actionTypes";

const PhotographerProfile = ({ photographerProfileData }) => {
    const { firstName, lastName, description, cityId } = photographerProfileData;

    const [imageUrl, setImageUrl] = useState(photographerProfileData.imageUrl);

    const [cities, setCities] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: actionTypes.LOAD_CITIES_REQUEST,
            meta: {
                onSuccess: (cities) => {
                    setCities(cities);
                }
            }
        });

        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_REQUEST });
    }, []);

    const schema = yup.object().shape({
        first_name: yup.string().required('Please, enter the first name'),
        last_name: yup.string().required('Please, enter the last name'),
        city_id: yup.string().required('Please, select the city')
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const [userErrors, setUserErrors] = useState(null);

    const onSubmit = (data) => {
        dispatch({
            type: actionTypes.UPDATE_PHOTOGRAPHER_PROFILE_REQUEST,
            payload: data,
            meta: {
                onSuccess: () => {},
                onError: (errors) => {
                    setUserErrors(errors);
                }
            }
        });
    };

    const [selectedCityId, setSelectedCityId] = useState(cityId);

    const photographerPhotos = useSelector(state => state.photographerProfile.photographerPhotos);

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
            meta: {
                onSuccess: (updatedImageUrl) => {
                    setImageUrl(updatedImageUrl);
                },
                onError: (errors) => {
                    setUserErrors(errors);
                }
            }
        });
    };

    const handleDrop = (acceptedFiles) => {
        const formData = new FormData();

        formData.append('photo[image]', acceptedFiles[0]);

        dispatch({
            type: actionTypes.CREATE_PHOTOGRAPHER_PHOTO_REQUEST,
            payload: formData,
            meta: {
                onSuccess: () => {
                    dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_REQUEST });
                },
                onError: (errors) => {}
            }
        });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: 'image/jpeg, image/png, image/gif'
    });

    return (
        <>
            <S.Container>
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
            </S.Container>
            <S.Container>
                <S.DropzoneContainer {...getRootProps({ isDragActive: isDragActive })}>
                    <input {...getInputProps()} />
                    <S.DropzoneText>Drag 'n' drop some files here, or click to select files</S.DropzoneText>
                    <S.DropzoneText>(Only *.jpeg, *.png and *.gif images will be accepted)</S.DropzoneText>
                </S.DropzoneContainer>
                {photographerPhotos && photographerPhotos.length > 0 && (
                    <S.PhotosWrapper>
                        {photographerPhotos.map((photographerPhoto, index) => (
                            <S.PhotoContainer key={index}>
                                <img src={photographerPhoto.imageUrl} />
                            </S.PhotoContainer>
                        ))}
                    </S.PhotosWrapper>
                )}
            </S.Container>
        </>
    );
};

export default PhotographerProfile;
