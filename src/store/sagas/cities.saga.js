import { all, call, getContext, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants/actionTypes';

import { citiesMapper } from '../../api/mapper';

function* getCities({ callbacks }) {
    const { onSuccess } = callbacks;

    try {
        const api = yield getContext('api');

        const { data } = yield call(api.getCities);

        const citiesData = citiesMapper(data);

        yield put({ type: actionTypes.LOAD_CITIES_SUCCESS, payload: citiesData });

        onSuccess && onSuccess(citiesData);
    } catch (e) {

    }
}

export default function* () {
    yield all([
        takeLatest(actionTypes.LOAD_CITIES_REQUEST, getCities)
    ]);
}
