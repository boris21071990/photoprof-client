import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { errorsMapper } from '../../api/mapper';

function* login({ payload, meta }) {
    const { onSuccess, onError } = meta;

    try {
        const api = yield getContext('api');

        const data = yield call(api.login, payload);

        yield put({ type: actionTypes.LOGIN_USER_SUCCESS, payload: { token: data.token } });

        onSuccess && onSuccess();
    } catch (errors) {
        onError && onError(errorsMapper(errors));
    }
}

function* register({ payload, meta }) {
    const { onSuccess, onError } = meta;

    try {
        const api = yield getContext('api');

        const data = yield call(api.register, payload);

        yield put({ type: actionTypes.REGISTER_USER_SUCCESS, payload: { token: data.token } });

        onSuccess && onSuccess();
    } catch (errors) {
        onError && onError(errorsMapper(errors));
    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOGIN_USER_REQUEST, login),
        takeLatest(actionTypes.REGISTER_USER_REQUEST, register)
    ]);
}
