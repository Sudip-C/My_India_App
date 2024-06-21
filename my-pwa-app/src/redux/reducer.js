import { GET_REQUEST_FAILED, GET_REQUEST_PENDING, GET_REQUEST_SUCCESS } from "./actionType"


const initialState={
    isLoading:true,
    isError:false,
    data:[]
}

export const ProductReducer=(state=initialState,action)=>{
switch(action.type){
    case GET_REQUEST_PENDING:
        return{
            ...state,
            isLoading:true,
            isError:null
    }
    case GET_REQUEST_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isError:null,
            data:action.payload
        }
    case GET_REQUEST_FAILED:
        return{
            ...state,
            isLoading:false,
            isError:action.payload
        }
    default:
        return state
}
}