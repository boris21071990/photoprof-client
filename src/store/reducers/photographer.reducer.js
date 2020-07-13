import actionTypes from '../../store/constants/actionTypes';

const initialState = {
    data: null
};

const photographerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOGRAPHER_SUCCESS:
            return { ...state, data: action.payload };
        case actionTypes.CLEAR_PHOTOGRAPHER:
            return { ...state, data: null };
        default:
            return state;
    }
};

export default photographerReducer;
