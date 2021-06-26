import React, { Component } from 'react'
import axios from 'axios';

class Postlist extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             title:'',
             body:''
        }
    }

    changehandler=(event)=>{
        this.setState({
             [event.target.name]:event.target.value
        })
    }
    
    submitform = e =>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then( response => console.log(response) )
        .catch(error => console.log(error) )
        console.log(this.state)
    }

    render() {
        const {userid,title,body} = this.state
        return (
            <div>
                <form onSubmit={this.submitform}>
                    <div>
                        <label>User Id</label>
                        <input type='text' name='userid' value={userid} onChange={this.changehandler}/>
                    </div>
                    <div>
                    <label>title</label>
                        <input type='text' name='title' value={title} onChange={this.changehandler}/>
                    </div>
                    <div>
                    <label>body</label>
                        <input type='text' name='body' value={body} onChange={this.changehandler}/>
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
                --------------------------------------------------------------------------------
                
            </div>
        )
    }
}

export default Postlist
