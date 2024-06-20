import { PRODUCT_URL } from "../utils/Api";
import { GET_REQUEST_FAILED, GET_REQUEST_PENDING, GET_REQUEST_SUCCESS } from "./actionType";
import axios from 'axios';

export const GetData = (dispatch) =>{
    dispatch({type: GET_REQUEST_PENDING})
    axios.get(PRODUCT_URL)
    .then((res)=>dispatch({type:GET_REQUEST_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:GET_REQUEST_FAILED,payload:err.message}))
}