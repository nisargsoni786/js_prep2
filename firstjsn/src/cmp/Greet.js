import React from 'react';

class Greet extends React.Component{
    // constructor(props){
    //     super(props);
    //     // var name=this.props.name;
    // }
 
        constructor(props){
            super()
            this.state={
                c:0
            }
        }

        count=()=>{
            this.setState({c:(this.state.c)+1})
            // this.state.c=this.state.c+1;
        }

        ppp=()=>{
            return <h1>jay swaminarayan !!!</h1>
        }

        render(){
        return(
            <div>
            {this.ppp()}
            <h1>COUNT NUMBER IS : {this.state.c}</h1>
            <button onClick={this.count}>ADD</button>
            </div>
        )
    }
}

export default Greet; 