import actionTypes from '../../store/constants/actionTypes';

const initialState = {
    loading: false,
    photographerData: {
        categories: []
    }
};

const photographerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOGRAPHER_REQUEST:
            return { ...state, loading: true };
        case actionTypes.LOAD_PHOTOGRAPHER_SUCCESS:
            return { ...state, photographerData: action.payload, loading: false };
        default:
            return state;
    }
};

export default photographerReducer;
