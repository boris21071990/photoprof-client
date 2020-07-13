import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { categoriesMapper } from '../../api/mapper';

function* getCategories({ callbacks }) {
    const { onSuccess } = callbacks;

    try {
        const api = yield getContext('api');

        const { data } = yield call(api.getCategories);

        const categoriesData = categoriesMapper(data);

        yield put({ type: actionTypes.LOAD_CATEGORIES_SUCCESS, payload: categoriesData });

        onSuccess && onSuccess(categoriesData);
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_CATEGORIES_REQUEST, getCategories)
    ]);
}
