import { types } from "../types/types";

const initialState = {
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {

    switch(action.type){

            case types.login:
                return {
                    ...state,
                    logged: true,
                    user: action.payload,
                }
                break;

            case types.logout:
                return {
                    logged: false,
                }
                break;

            default:
                return state;
    }
}