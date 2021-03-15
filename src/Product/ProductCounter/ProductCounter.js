import React from 'react';
import {decrAction, incrAction} from '../CounterAction/CounterAction';
import {useSelector, useDispatch} from 'react-redux';

let ProductCounter=()=>{
    let dispatch=useDispatch();
    let counter=useSelector((state)=>{
        return state.counter;
    });
    let decrHandler=()=>{
        dispatch(decrAction());
    }
    let incrHandler=()=>{
        dispatch(incrAction());
    }
    return<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        Counter Example: {JSON.stringify(counter)}
                    </div>
                    <div className="card-body">
                        <button className="btn btn-success" onClick={decrHandler}>-</button>
                        QTY: {counter.qty}
                        <button className="btn btn-primary" onClick={incrHandler}>+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default ProductCounter;