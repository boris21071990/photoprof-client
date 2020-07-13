import actionTypes from '../constants/actionTypes';

const initialState = {
    isLogged: false,
    errors: null,
    loading: false,
    data: {}
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_REQUEST:
            return { ...state, errors: null, loading: true };
        case actionTypes.LOGIN_USER_SUCCESS:
            return { ...state, isLogged: true, errors: null, loading: false, data: action.payload };
        case actionTypes.LOGIN_USER_ERROR:
            return { ...state, errors: action.payload, loading: false };
        default:
            return state;
    }
};

export default usersReducer;
