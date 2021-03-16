import React,{Component} from 'react';
import {incrAction, decrAction} from '../ProductAction/ProductAction';
import {useSelector, useDispatch} from 'react-redux';

let ProductList=()=>{
    const dispatch=useDispatch();
    let product=useSelector((state)=>{
        return state.product
    })
    let incrHandler=()=>{
        dispatch(incrAction());
    }
    let decrHandler=()=>{
        dispatch(decrAction());
    }
    return<>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-8">
                <pre>{JSON.stringify(product)}</pre>
                <table className="table table-striped table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ProductName</th>
                            <th scope="col">Image</th>
                            <th scope="col">No of products</th>
                            <th scope="col">product price</th>
                            <th scope="col">product total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.product_Name}</td>
                            <td><img src={product.product_Image} height="50px" width="50px"/> </td>
                            <td><i className="fa fa-minus-circle" aria-hidden="true" onClick={decrHandler}></i> 
                            {product.product_Qty}
                            <i className="fa fa-plus-circle" aria-hidden="true" onClick={incrHandler}></i> </td>
                            <td>{product.product_Price}</td>
                            <td>{product.product_Qty * product.product_Price}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
    </>
};
export default ProductList;