import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './PhotographerProfilePhotos.styled';
import actionTypes from '../../store/constants/actionTypes';

import { useDropzone } from 'react-dropzone'

const PhotographerProfilePhotos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_REQUEST });
    }, []);

    const photos = useSelector((state) => state.photographerProfile.photos);

    const handleDrop = (acceptedFiles) => {
        const formData = new FormData();

        formData.append('photo[image]', acceptedFiles[0]);

        dispatch({
            type: actionTypes.CREATE_PHOTOGRAPHER_PHOTO_REQUEST,
            payload: formData,
            callbacks: {
                onSuccess: () => {
                    dispatch({ type: actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_REQUEST });
                },
                onFailure: (errors) => {}
            }
        });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: 'image/jpeg, image/png, image/gif'
    });

    return (
        <>
            <S.DropzoneContainer {...getRootProps({ isDragActive: isDragActive })}>
                <input {...getInputProps()} />
                <S.DropzoneText>Drag 'n' drop some files here, or click to select files</S.DropzoneText>
                <S.DropzoneText>(Only *.jpeg, *.png and *.gif images will be accepted)</S.DropzoneText>
            </S.DropzoneContainer>
            {photos && photos.length > 0 && (
                <S.Photos>
                    {photos.map((photo, index) => (
                        <S.Photo key={index}>
                            <img src={photo.smallImageUrl} />
                        </S.Photo>
                    ))}
                </S.Photos>
            )}
        </>
    );
};

export default PhotographerProfilePhotos;
