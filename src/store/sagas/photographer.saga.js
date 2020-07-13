import { all, call, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import api from "../../api";
import { photographerMapper } from "../../api/mapper";

function* getPhotographer({ payload }) {
    try {
        const photographer = yield call(api.getPhotographer, payload);

        yield put({ type: actionTypes.LOAD_PHOTOGRAPHER_SUCCESS, payload: photographerMapper(photographer) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOGRAPHER_REQUEST, getPhotographer)
    ]);
}
