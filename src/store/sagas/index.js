import { all, fork } from 'redux-saga/effects';

import cities from './cities.saga';
import photos from './photos.saga';
import photographers from './photographers.saga';
import photographer from './photographer.saga';
import photographerProfile from './photographerProfile.saga';
import photo from './photo.saga';
import user from './user.saga';
import home from './home.saga';
import categories from './categories.saga';

function* rootSaga() {
    yield all([
        fork(cities),
        fork(photos),
        fork(photographers),
        fork(photographer),
        fork(photographerProfile),
        fork(photo),
        fork(user),
        fork(home),
        fork(categories)
    ]);
}

export default rootSaga;