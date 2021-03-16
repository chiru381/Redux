import {INCR,DECR} from '../ProductAction/ProductAction';

let initialState={
    product_Name: "SAMSUNG Galaxy F62 (Laser Green, 128 GB)",
    product_Image: "https://rukminim1.flixcart.com/image/224/224/klb78nk0/mobile/m/2/k/galaxy-f62-sm-e625fzggins-samsung-original-imagygxxse8gbaby.jpeg?q=90",
    product_Price: 25000,
    product_Qty: 1,
};
let ProductReducer=(state=initialState, action)=>{
    switch(action.type){
        case INCR:
            return {
                ...state,
                product_Qty: state.product_Qty+1,
            }
        case DECR:
            return{
                ...state,
                product_Qty: state.product_Qty-1,
            }
        default:
            return state;
    }
}
export {ProductReducer};