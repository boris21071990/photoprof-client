import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { errorsMapper, userMapper } from '../../api/mapper';

function* getCurrentUser() {
  try {
    const api = yield getContext('api');

    const { data } = yield call(api.getCurrentUser);

    yield put({ type: actionTypes.LOAD_CURRENT_USER_SUCCESS, payload: { user: userMapper(data) } });
  } catch (errors) {}
}

function* login({ payload, callbacks }) {
  const { onSuccess, onFailure } = callbacks;

  try {
    const api = yield getContext('api');

    const { data } = yield call(api.login, payload);

    yield put({ type: actionTypes.LOGIN_USER_SUCCESS, payload: { token: data.token } });

    onSuccess && onSuccess();
  } catch (errors) {
    onFailure && onFailure(errorsMapper(errors));
  }
}

function* register({ payload, callbacks }) {
  const { onSuccess, onFailure } = callbacks;

  try {
    const api = yield getContext('api');

    const { data } = yield call(api.register, payload);

    yield put({ type: actionTypes.REGISTER_USER_SUCCESS, payload: { token: data.token } });

    onSuccess && onSuccess();
  } catch (errors) {
    onFailure && onFailure(errorsMapper(errors));
  }
}

function* logout({ callbacks }) {
  const { onSuccess, onFailure } = callbacks;

  try {
    const api = yield getContext('api');

    yield call(api.logout);

    yield put({ type: actionTypes.LOGOUT_USER_SUCCESS });

    onSuccess && onSuccess();
  } catch (errors) {
    onFailure && onFailure(errorsMapper(errors));
  }
}

export default function* () {
  yield all([
    takeLatest(actionTypes.LOGIN_USER_REQUEST, login),
    takeLatest(actionTypes.REGISTER_USER_REQUEST, register),
    takeLatest(actionTypes.LOAD_CURRENT_USER_REQUEST, getCurrentUser),
    takeLatest(actionTypes.LOGOUT_USER_REQUEST, logout),
  ]);
}
