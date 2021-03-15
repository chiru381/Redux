const DECR="DECR";
const INCR="INCR";

let incrAction=()=>{
    return{
        type: INCR,
    };
};
let decrAction=()=>{
    return{
        type: DECR,
    };
};
export {INCR,DECR,incrAction,decrAction};