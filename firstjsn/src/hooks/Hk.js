import React,{useState,useEffect} from 'react'
import Formhk from './Formhk';

function Hk() {

    const [count,setCount] =  useState(0)

    const clicked=()=>{
        console.log('clikedddddddddd')
        if(count==5){
            setCount(0)
        }
        else{
        setCount(count+1)
        }
    }

    useEffect(()=>{
        if(document.title==="jsn"){
        document.title="jay swaminarayan !!!"
        }
        else{
            document.title="jsn"
        }
    })

    const incrementfive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1)
        }
    }


    return (
        <div>
            <h1>COUNT IS : {count}</h1>
            <button onClick={()=> setCount(0)}> RESET </button>
            <button onClick={()=> setCount(count+1)}> INCREMENT </button>
            <button onClick={()=> setCount(count-1)}> Decrement </button>
            <button onClick={incrementfive}> ICREMENT BY 5 </button>
            --------
            -----
            <Formhk/>
            {/* <button onClick={clicked}> click count is : {count} </button> */}
        </div>
    )
}

export default Hk
