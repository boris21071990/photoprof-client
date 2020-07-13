import actionTypes from '../../store/constants/actionTypes';

const initialState = {
  data: null,
  photos: null,
};

const photographerProfile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PHOTOGRAPHER_PROFILE_SUCCESS:
      return { ...state, data: action.payload };
    case actionTypes.LOAD_PHOTOGRAPHER_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload };
    case actionTypes.CLEAR_PHOTOGRAPHER_PROFILE:
      return { ...state, data: null, photos: null };
    default:
      return state;
  }
};

export default photographerProfile;
