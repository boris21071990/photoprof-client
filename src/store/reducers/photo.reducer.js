import actionTypes from '../../store/constants/actionTypes';

const initialState = {
  data: null,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PHOTO_SUCCESS:
      return { ...state, data: action.payload };
    case actionTypes.CLEAR_PHOTO:
      return { ...state, data: null };
    default:
      return state;
  }
};

export default photoReducer;
