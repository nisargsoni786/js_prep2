import React from 'react';
// import styles from './../dex.module.css';

class Msg extends React.Component{
    constructor(props){
        super()
        this.state={
            message:"Heyaa visitor",
            mm:props.name
        }
    }
 
    changeMessage(){
        this.setState({
            message:"Thank you",
            mm:"changeddd"

        })
    }

    render(){
        return(
           <div>
           {/* <h1> {this.state.message}</h1>
           <h1> {this.state.mm}</h1> */}
            <h1>{this.props.name}</h1>
            <h1>{this.props.pr}</h1>
           {/* <button onClick={()=>this.changeMessage()}>subscribe</button> */}
           </div>
        )
    }
}

export class Apl extends React.Component{
    render(){
        return(
            <div>
            Apple class
            </div>
        )
    }
}
export default Msg; 
 