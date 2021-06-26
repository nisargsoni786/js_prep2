import React,{useReducer} from 'react'

const reducer=(state,action)=>{

    if(action==='increment') return state+1
    else if(action==='decrement') return state-1
    else if(action==='reset') return 0
    else return state

}

function Reduce() {

    const[count,dispatch] = useReducer(reducer,0)

    return (
        <div>
            <h1>count is : {count}</h1>
            <button onClick={()=> dispatch('increment')}>INCREMENT</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
} 

export default Reduce
