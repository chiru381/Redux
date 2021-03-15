import { wishReducer } from './Wish/WishReducer/WishReducer';
import {CounterReducer} from './Product/CounterReducer/CounterReducer';
import { combineReducers } from 'redux';

let rootReducer=combineReducers({
    wishMessage: wishReducer,
    counter: CounterReducer,
});

export {rootReducer};