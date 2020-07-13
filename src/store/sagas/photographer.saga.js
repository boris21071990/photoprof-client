import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { photographerItemMapper } from '../../api/mapper';

function* getPhotographer({ payload }) {
    try {
        const api = yield getContext('api');

        const { data } = yield call(api.getPhotographer, payload);

        yield put({ type: actionTypes.LOAD_PHOTOGRAPHER_SUCCESS, payload: photographerItemMapper(data) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOGRAPHER_REQUEST, getPhotographer)
    ]);
}
