import React, { Component } from 'react'

class Comp extends Component {
    constructor(){
        super()
        this.state={
            c:0
        }
    }

    countermouseover=()=>{
        this.setState({c:( this.state.c )+1})
    }

    render() {
        return (
            <div>
                <button onMouseOver={this.countermouseover}>MOUSE_OVER {this.state.c} times</button>
            </div>
        )
    }
}

export default Comp;
