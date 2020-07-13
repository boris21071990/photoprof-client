import actionTypes from '../../store/constants/actionTypes';

const initialState = {
  recentPhotos: null,
  recentPhotographers: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_RECENT_PHOTOS_SUCCESS:
      return { ...state, recentPhotos: action.payload };
    case actionTypes.LOAD_RECENT_PHOTOGRAPHERS_SUCCESS:
      return { ...state, recentPhotographers: action.payload };
    case actionTypes.CLEAR_PHOTO:
      return { ...state, data: null };
    default:
      return state;
  }
};

export default homeReducer;
