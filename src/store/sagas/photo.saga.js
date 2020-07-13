import { all, call, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import api from "../../api";
import { photoMapper } from "../../api/mapper";

function* getPhoto({ payload }) {
    try {
        const photoData = yield call(api.getPhoto, payload);

        yield put({ type: actionTypes.LOAD_PHOTO_SUCCESS, payload: photoMapper(photoData) });
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_PHOTO_REQUEST, getPhoto)
    ]);
}
