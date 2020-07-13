import actionTypes from '../constants/actionTypes';

const initialState = {
  current: null,
  token: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return { ...state, token: action.payload.token };
    case actionTypes.REGISTER_USER_SUCCESS:
      return { ...state, token: action.payload.token };
    case actionTypes.LOAD_CURRENT_USER_SUCCESS:
      return { ...state, current: action.payload.user };
    case actionTypes.LOGOUT_USER_SUCCESS:
      return { ...state, current: null, token: null };
    default:
      return state;
  }
};

export default usersReducer;
