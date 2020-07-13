import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { photoViewMapper } from '../../api/mapper';

function* getPhoto({ payload }) {
  try {
    const api = yield getContext('api');

    const { data } = yield call(api.getPhoto, payload);

    yield put({ type: actionTypes.LOAD_PHOTO_SUCCESS, payload: photoViewMapper(data) });
  } catch (e) {}
}

export default function* () {
  yield all([takeLatest(actionTypes.LOAD_PHOTO_REQUEST, getPhoto)]);
}
