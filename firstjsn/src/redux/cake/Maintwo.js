import React from 'react'
import {buyIce} from './Actions'
import {useSelector,useDispatch} from 'react-redux'


function Maintwo() {

    const icecream = useSelector(state => state.icecream)
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>Icecream resrs are : {icecream}</h1>
            <button onClick={()=> dispatch(buyIce(1))}>buy Icecream</button>
        </div>
    )
}

export default Maintwo;
