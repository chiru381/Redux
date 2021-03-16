import { wishReducer } from './Wish/WishReducer/WishReducer';
import {CounterReducer} from './Counter/CounterReducer/CounterReducer';
import {ProductReducer} from './Product/ProductReducer/ProductReducer';
import { combineReducers } from 'redux';

let rootReducer=combineReducers({
    wishMessage: wishReducer,
    counter: CounterReducer,
    product: ProductReducer,
});

export {rootReducer};