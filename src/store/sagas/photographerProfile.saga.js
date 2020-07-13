import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { errorsMapper, photographerProfileMapper, photographerPhotosMapper } from '../../api/mapper';

function* getPhotographerProfile() {
    try {
        const api = yield getContext('api');

        const { data } = yield call(api.getPhotographerProfile);

        yield put({ type: actionTypes.LOAD_PHOTOGRAPHER_PROFILE_SUCCESS, payload: photographerProfileMapper(data) });
    } catch (e) {

    }
}

function* updatePhotographerProfile({ payload, callbacks }) {
    const { onSuccess, onFailure } = callbacks;

    try {
        const api = yield getContext('api');

        yield call(api.updatePhotographerProfile, payload);

        yield put({ type: actionTypes.UPDATE_PHOTOGRAPHER_PROFILE_SUCCESS });

        onSuccess && onSuccess();
    } catch (errors) {
        onFailure && onFailure(errorsMapper(errors));
    }
}

function* updatePhotographerProfileImage({ payload, callbacks }) {
    const { onSuccess, onFailure } = callbacks;

    try {
        const api = yield getContext('api');

        const { data } = yield call(api.updatePhotographerProfileImage, payload);

        yield put({ type: actionTypes.UPDATE_PHOTOGRAPHER_PROFILE_IMAGE_SUCCESS });

        onSuccess && onSuccess(data.image_url);
    } catch (errors) {
        onFailure && onFailure(errorsMapper(errors));
    }
}

function* getPhotographerPhotos() {
    try {
        const api = yield getContext('api');

        const { data } = yield call(api.getPhotographerPhotos);

        yield put({ type: actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_SUCCESS, payload: photographerPhotosMapper(data) });
    } catch (e) {

    }
}

function* createPhotographerPhoto({ payload, callbacks }) {
    const { onSuccess, onFailure } = callbacks;

    try {
        const api = yield getContext('api');

        const { data } = yield call(api.createPhotographerPhoto, payload);

        yield put({ type: actionTypes.CREATE_PHOTOGRAPHER_PHOTO_SUCCESS });

        onSuccess && onSuccess(data);
    } catch (e) {
        onFailure && onFailure(errorsMapper(errors));
    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOGRAPHER_PROFILE_REQUEST, getPhotographerProfile),
        takeLatest(actionTypes.UPDATE_PHOTOGRAPHER_PROFILE_REQUEST, updatePhotographerProfile),
        takeLatest(actionTypes.UPDATE_PHOTOGRAPHER_PROFILE_IMAGE_REQUEST, updatePhotographerProfileImage),
        takeLatest(actionTypes.CREATE_PHOTOGRAPHER_PHOTO_REQUEST, createPhotographerPhoto),
        takeLatest(actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_REQUEST, getPhotographerPhotos)
    ]);
}
