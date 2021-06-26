import React from 'react'
import {buyCake} from './Actions'
import {connect} from 'react-redux'

function Main(props) {
    return (
        <div>
            <h1>Cakes are : {props.noofcakes}</h1>
            <button onClick={props.buycake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        noofcakes:state.noofcakes
        }
}

const mapdispatchtoprops=(dispatch)=>{
    return {
        buycake: ()=>dispatch(buyCake()) 
    }
}

export default connect(mapStateToProps,mapdispatchtoprops)(Main)
