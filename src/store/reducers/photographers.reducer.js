import actionTypes from '../../store/constants/actionTypes';

const initialState = {
    loading: false,
    list: []
};

const photographersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHOTOGRAPHERS_REQUEST:
            return { ...state, loading: true };
        case actionTypes.LOAD_PHOTOGRAPHERS_SUCCESS:
            return { ...state, list: action.payload, loading: false };
        default:
            return state;
    }
};

export default photographersReducer;
