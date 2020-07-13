import { combineReducers } from 'redux';

import cities from './cities.reducer';
import photos from './photos.reducer';
import photographers from './photographers.reducer';
import photographer from './photographer.reducer';
import photographerProfile from './photographerProfile.reducer';
import photo from './photo.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
    cities,
    photos,
    photographers,
    photographer,
    photographerProfile,
    photo,
    user
});

export default rootReducer;