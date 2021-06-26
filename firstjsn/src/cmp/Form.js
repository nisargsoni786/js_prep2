import { timers } from 'jquery'
import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            comments:'',
            topic:'react'
        } 
    }
    handlesubmit=(event)=>{
        alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}  `)
        event.preventDefault()
    }

    handlechangeusername=(event)=>{
        this.setState({username:event.target.value})
        console.log(event.target.value)
    }
    handlechangecomment=(event)=>{
        this.setState({comments:event.target.value})
        console.log(this.state.comments)
    }
    handlechangetopic=(event)=>{
        this.setState({topic:event.target.value})
        console.log(event.target.value)
    }
    clicksub=(e)=>{
        if(e.KeyCode==13){
        this.handlesubmit();}
    }

    render() {
        return (
            <form onSubmit={this.handlesubmit} onKeyPress={this.clicksub}>
            <div>
                <label>User Name</label>
                <input value={this.state.username} onChange={this.handlechangeusername} type='text'/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handlechangecomment} type='text'></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handlechangetopic}>
                    <option value='react'>React</option>
                    <option value='vue'>Vue</option>
                    <option value='angular'>Angular</option>
                </select>
            </div>
            <button type='submit' >SUBMIT</button>
            </form>
        )
    }
}

export default Form;
