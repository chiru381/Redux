import React from 'react';
import WishMessage from './Wish/WishMessage/WishMessage';
import store from './store';
import { Provider } from 'react-redux';
import Counter from './Counter/Counter/Counter';
import ProductList from './Product/ProductList/ProductList';

let App=()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">React Redux Basic Example</a>
    </nav>
    <Provider store={store} >
        <WishMessage />
        <Counter />
        <ProductList />
    </Provider>
    </>)
}
export default App;