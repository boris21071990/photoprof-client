import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { photosMapper } from '../../api/mapper';

function* getPhotos({ payload }) {
    try {
        const api = yield getContext('api');

        const data = yield call(api.getPhotos, payload);

        yield put({ type: actionTypes.LOAD_PHOTOS_SUCCESS, payload: photosMapper(data) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOS_REQUEST, getPhotos)
    ]);
}
