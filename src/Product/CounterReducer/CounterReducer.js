import {INCR,DECR} from '../CounterAction/CounterAction';

let initialState={
    qty: 10,
};
let CounterReducer=((state=initialState, action)=>{
    switch(action.type){
        case INCR:
            return{
                qty: state.qty+1,
            }
        case DECR:
            return{
                qty: state.qty-1,
            }
        default:
            return state;
    }
});
export {CounterReducer};