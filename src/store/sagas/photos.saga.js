import { all, call, put, takeLatest } from 'redux-saga/effects';

import actionTypes from "../constants/actionTypes";

import api from '../../api';
import { photosMapper } from '../../api/mapper';

function* getPhotos({ payload }) {
    try {
        const photos = yield call(api.getPhotos, payload);

        yield put({ type: actionTypes.LOAD_PHOTOS_SUCCESS, payload: photosMapper(photos) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOS_REQUEST, getPhotos)
    ]);
}
