import React from 'react';
import Eve from './Eve';
import {Me} from './Eve';

class Even extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number:0
        }
    }
    funCli=(child)=>{
        // this.setState({
        //     number:(this.state.number)+1
        // })
        if(child=="Nisarg"){alert('Name is nisarg')}
        else{alert(`Name is ${child }`)}
    }

    render(){
        return(
            <div>
                <Eve name={this.funCli} nn="heyaaaaaa"/>
            </div>
        )
    }
}


// function Even(){
//     function fuNc(){
//         console.log('hekfbjhdfbwhf');
//     }

//     return(
//         <div>
//             <button onClick={fuNc}>click</button>
//             </div>
//     )
// }



export default Even;