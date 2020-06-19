import * as actionTypes from "../actions/actionTypes";

const initialState = {
    header: "Choose Your Character"
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_HEADER:
            return {
                header: action.result
            };
        default:
            return state;
    }
};

export default reducer;