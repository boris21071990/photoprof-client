import actionTypes from '../constants/actionTypes';

const initialState = {
    list: [],
    loading: false
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOS_REQUEST:
            return { ...state, loading: true };
        case actionTypes.LOAD_PHOTOS_SUCCESS:
            return { ...state, list: action.payload, loading: false };
        default:
            return state;
    }
};

export default photosReducer;
