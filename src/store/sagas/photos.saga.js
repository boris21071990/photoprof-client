import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { photosMapper } from '../../api/mapper';

function* getPhotos({ payload, callbacks }) {
    const { onSuccess } = callbacks;

    try {
        const api = yield getContext('api');

        const { data, meta } = yield call(api.getPhotos, payload);

        yield put({ type: actionTypes.LOAD_PHOTOS_SUCCESS, payload: photosMapper(data) });

        onSuccess && onSuccess({ totalPages: meta.pagination.total_pages });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOS_REQUEST, getPhotos)
    ]);
}
