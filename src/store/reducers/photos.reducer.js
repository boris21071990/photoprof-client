import actionTypes from '../constants/actionTypes';

const initialState = {
  data: null,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PHOTOS_REQUEST:
      return { ...state, data: null };
    case actionTypes.LOAD_PHOTOS_SUCCESS:
      return { ...state, data: action.payload };
    case actionTypes.CLEAR_PHOTOS:
      return { ...state, data: null };
    default:
      return state;
  }
};

export default photosReducer;
