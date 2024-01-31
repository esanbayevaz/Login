import { LOGGED_IN, LOGGED_OUT } from "./type";

export const  loggedInAction = () => {
    return{
        type:LOGGED_IN,
    };
};
export const  loggedOutAction = () => {
    return{
        type:LOGGED_OUT,
    };
};