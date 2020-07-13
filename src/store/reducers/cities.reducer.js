import actionTypes from '../../store/constants/actionTypes';

const initialState = {
    list: []
};

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CITIES_REQUEST:
            return { ...state };
        case actionTypes.LOAD_CITIES_SUCCESS:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};

export default citiesReducer;
