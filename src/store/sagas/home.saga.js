import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { photographersMapper, photosMapper } from '../../api/mapper';

function* getPhotos({ payload }) {
    try {
        const api = yield getContext('api');

        const { data } = yield call(api.getPhotos, payload);

        yield put({ type: actionTypes.LOAD_RECENT_PHOTOS_SUCCESS, payload: photosMapper(data) });
    } catch (e) {

    }
}

function* getPhotographers({ payload }) {
    try {
        const api = yield getContext('api');

        const { data } = yield call(api.getPhotographers, payload);

        yield put({ type: actionTypes.LOAD_RECENT_PHOTOGRAPHERS_SUCCESS, payload: photographersMapper(data) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_RECENT_PHOTOS_REQUEST, getPhotos),
        takeLatest(actionTypes.LOAD_RECENT_PHOTOGRAPHERS_REQUEST, getPhotographers)
    ]);
}
