import { combineReducers } from 'redux';

import photos from './photos.reducer';
import photographers from './photographers.reducer';
import photographer from './photographer.reducer';
import photo from './photo.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
    photos,
    photographers,
    photographer,
    photo,
    user
});

export default rootReducer;