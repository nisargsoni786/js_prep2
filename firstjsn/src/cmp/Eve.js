import React, { Component } from 'react'
import './../index.css';
// import Even from './event'
let msg=[1,22,33333]
let i;
const msgFun=msg.map(msgg=> <h1>{msgg}</h1>)



class Eve extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:this.props.nn+" Good Morning"
        }
    }

    ppp=(x)=>{
        return <h1 className="prim ff">{x+2}</h1>;
    }

    render() {
        return (
            <div>
                <button className="prim ff" onClick={()=>this.props.name('F')}>CLICK</button>
                {msg.map((msgg) => <h2>{msgg}</h2> )}
                {/* {msgFun} */}
                {this.ppp(2)}
            </div>
        )
    }
}

export class Me extends React.Component{
    render(){
        return(
            <div>
                in the 2nd classssssss
            </div>
        )
    }
}

export default Eve
