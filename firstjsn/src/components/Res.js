import React,{useState,useEffect} from 'react'
import {buyIce} from '../redux/cake/Actions'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios' 

function Res() {

    const icecream = useSelector(state => state.icecream)
    const dispatch = useDispatch()

    // const helfun=(m)=>{
         
    // }
    useEffect(() => {
        axios.get('http://localhost:9000/products')
        .then(res=>{
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            {/* <p>
                {icecream}
                <hr/>
                {helfun(icecream)}
            </p> */}
            <h1>{icecream} are</h1>
            <button onClick={()=>dispatch(buyIce(3))}>Click</button>
        </div>
    )
}

export default Res;
