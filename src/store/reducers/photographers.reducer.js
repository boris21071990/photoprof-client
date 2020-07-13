import actionTypes from '../../store/constants/actionTypes';

const initialState = {
  data: null,
};

const photographersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PHOTOGRAPHERS_REQUEST:
      return { ...state, data: null };
    case actionTypes.LOAD_PHOTOGRAPHERS_SUCCESS:
      return { ...state, data: action.payload };
    case actionTypes.CLEAR_PHOTOGRAPHERS:
      return { ...state, data: null };
    default:
      return state;
  }
};

export default photographersReducer;
