import React,{useEffect,useState} from 'react'

function Useef() {

    const [name, setname] = useState('Nisarg')  
    const [c, setc] = useState(0) 
    
    const change=()=>{
        if(name==="Nisarg"){
            setname("Soni")
        }
        else{
            setname("Nisarg")
        }
    }

    const inc=()=>{
        setc(c+1)
    }


    useEffect(()=>{
        console.log('name is changeddddd')
    },[])
    useEffect(()=>{
        console.log('count is changedddd')
    },[c])

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={change} >CLICK TO CHANGE NAME</button>
            <hr/>
            <hr/>
            <h1>{c}</h1>
            <button onClick={inc} >CLICK TO CHANGE COUNT</button>
        </div>
    )
}

export default Useef
