import { CREATE_PAYMENT_FAILED, CREATE_PAYMENT_SUCCESS, FETCH_PAYMENT_FAILED, FETCH_PAYMENT_REQUEST, FETCH_PAYMENT_SUCCESS, UPDATE_PAYMENT_SUCCESS } from "../ActionType"

const initialState = {
    loading:false,
    payment:[],
    error:null
}

const reducer = (state={}, action)=>{
    switch(action.type){
        case FETCH_PAYMENT_REQUEST:
            return {...state, loading:true};
        case FETCH_PAYMENT_SUCCESS:
            return {...state, payment:action.payload, loading:false};
        case UPDATE_PAYMENT_SUCCESS: 
            return{
                ...state, 
                payment: state.payment.map((val)=>val.paymentId === action.payload.paymentId ? action.payload: val)
            }
        case CREATE_PAYMENT_SUCCESS :
            return {
                ...state, 
                payment:state.payment.map(val=>{ return val.paymentId === action.payload.paymentId ? action.payload : val}),
                loading:false,
            }
        case FETCH_PAYMENT_FAILED,CREATE_PAYMENT_FAILED:
            return {...state, error:action.error, loading:false};
        default:
            return state;
    }
}

export default reducer;