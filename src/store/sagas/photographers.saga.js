import { all, call, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import api from "../../api";
import { photographersMapper } from "../../api/mapper";

function* getPhotographers({ payload }) {
    try {
        const photographers = yield call(api.getPhotographers, payload);

        yield put({ type: actionTypes.LOAD_PHOTOGRAPHERS_SUCCESS, payload: photographersMapper(photographers) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTOGRAPHERS_REQUEST, getPhotographers)
    ]);
}
