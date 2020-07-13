import actionTypes from '../../store/constants/actionTypes';

const initialState = {
    photographerProfileData: null,
    photographerPhotos: null
};

const photographerProfile = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOGRAPHER_PROFILE_REQUEST:
            return { ...state, photographerProfileData: null };
        case actionTypes.LOAD_PHOTOGRAPHER_PROFILE_SUCCESS:
            return { ...state, photographerProfileData: action.payload };
        case actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_REQUEST:
            return { ...state, photographerPhotos: null };
        case actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_SUCCESS:
            return { ...state, photographerPhotos: action.payload };
        default:
            return state;
    }
};

export default photographerProfile;
