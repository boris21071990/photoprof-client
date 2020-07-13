import actionTypes from '../constants/actionTypes';

const initialState = {
    isLogged: false,
    errors: null,
    token: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_REQUEST:
            return { ...state, errors: null };
        case actionTypes.LOGIN_USER_SUCCESS:
            return { ...state, isLogged: true, errors: null, token: action.payload.token };
        case actionTypes.LOGIN_USER_ERROR:
            return { ...state };
        case actionTypes.REGISTER_USER_REQUEST:
            return { ...state, errors: null };
        case actionTypes.REGISTER_USER_SUCCESS:
            return { ...state, isLogged: true, errors: null, token: action.payload.token };
        case actionTypes.REGISTER_USER_ERROR:
            return { ...state };
        default:
            return state;
    }
};

export default usersReducer;
