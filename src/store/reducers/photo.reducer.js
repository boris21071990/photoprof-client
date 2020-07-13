import actionTypes from '../../store/constants/actionTypes';

const initialState = {
    loading: false,
    photoData: {}
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTO_REQUEST:
            return { ...state, loading: true };
        case actionTypes.LOAD_PHOTO_SUCCESS:
            return { ...state, photoData: action.payload, loading: false };
        default:
            return state;
    }
};

export default photoReducer;
