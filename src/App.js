import React from 'react';
import WishMessage from './Wish/WishMessage/WishMessage';
import store from './store';
import { Provider } from 'react-redux';
import ProductCounter from './Product/ProductCounter/ProductCounter';

let App=()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">React Redux Basic Example</a>
    </nav>
    <Provider store={store} >
        <WishMessage />
        <ProductCounter />
    </Provider>
    </>)
}
export default App;