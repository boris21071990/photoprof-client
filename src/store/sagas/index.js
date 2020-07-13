import { all, fork } from 'redux-saga/effects';

import photos from './photos.saga';
import photographers from './photographers.saga';
import photographer from './photographer.saga';
import photo from './photo.saga';
import user from './user.saga';

function* rootSaga() {
    yield all([
        fork(photos),
        fork(photographers),
        fork(photographer),
        fork(photo),
        fork(user)
    ]);
}

export default rootSaga;