// import React from 'react';
// import redux from 'redux'

const redux=require('redux');

const createStore=redux.createStore

const buycake="BUY_CAKE"

const initialstate={
    cakes:10
}

const buyCake=()=>{
    return(
        {
            type:buycake
        }
    )
}

const reducer=(state=initialstate,action)=>{
     if(action.type===buycake){
         return { 
             cakes:state.cakes-1
         }
     }
     else{
         return state
     }
}

const store=createStore(reducer);
console.log('initial state',store.getState())

const unsubscribe = store.subscribe(()=> console.log('updated state' ,store.getState()) )
console.log(store.getState().cakes)

store.dispatch({type:"BUY_CAKE"})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe();
 