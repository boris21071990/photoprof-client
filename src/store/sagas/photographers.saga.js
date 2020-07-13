import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { photographersMapper } from '../../api/mapper';

function* getPhotographers({ payload, callbacks }) {
    const { onSuccess } = callbacks;

    try {
        const api = yield getContext('api');

        const { data, meta } = yield call(api.getPhotographers, payload);

        yield put({ type: actionTypes.LOAD_PHOTOGRAPHERS_SUCCESS, payload: photographersMapper(data) });

        onSuccess && onSuccess({ totalPages: meta.pagination.total_pages });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOGRAPHERS_REQUEST, getPhotographers)
    ]);
}
