import { LOGGED_IN, LOGGED_OUT } from "./type";

export const tokenInitialState={
    token:JSON.parse(localStorage.getItem("token")) || false,
}
export const tokenReducer=(state,action)=>{
    switch(action.type){
      case  LOGGED_IN :
        return (state={
            token:true,
        });
        case  LOGGED_OUT :
        return (state={
            token:false,
        });
        default:
            return state;
    }
};