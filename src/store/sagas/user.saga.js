import { all, call, put, takeLatest } from 'redux-saga/effects';

import actionTypes from "../constants/actionTypes";

import api from '../../api';

function* login({ payload, meta }) {
    const { onSuccess, onError } = meta;

    try {
        const data = yield call(api.login, payload);

        yield put({ type: actionTypes.LOGIN_USER_SUCCESS, payload: data });

        onSuccess && onSuccess();
    } catch (e) {
        yield put({ type: actionTypes.LOGIN_USER_ERROR, payload: e });

        onError && onError();
    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOGIN_USER_REQUEST, login)
    ]);
}
