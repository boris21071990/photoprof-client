import actionTypes from '../../store/constants/actionTypes';

const initialState = {
    list: []
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CATEGORIES_REQUEST:
            return { ...state };
        case actionTypes.LOAD_CATEGORIES_SUCCESS:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};

export default categoriesReducer;
