import React from 'react'
import {buyIce} from './../redux/cake/Actions'
import {connect} from 'react-redux'


function Mainttt(props) {
    return (
        <div>
            <h1>Icecream resrs jjjjjjjjjjjssssssssssssssnnnnnnnnnn : {props.icecream}</h1>
            <button onClick={props.buyicecream}>buy Icecream</button>
        </div>
    )
}

const statetoprop=(state)=>{
    return{
    icecream:state.icecream
    }
}

const actiontoprops=(dispatch)=>{
    return{
    buyicecream: ()=>dispatch(buyIce())
    }
}


export default connect(statetoprop,actiontoprops)(Mainttt)
