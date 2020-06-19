import * as actionTypes from "./actionTypes";

export const setHeader = (result) => {
    return {
        type: actionTypes.SET_HEADER,
        result: result
    };
};