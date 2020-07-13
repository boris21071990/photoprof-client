import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { photographersMapper } from '../../api/mapper';

function* getPhotographers({ payload }) {
    try {
        const api = yield getContext('api');

        const data = yield call(api.getPhotographers, payload);

        yield put({ type: actionTypes.LOAD_PHOTOGRAPHERS_SUCCESS, payload: photographersMapper(data) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOGRAPHERS_REQUEST, getPhotographers)
    ]);
}
