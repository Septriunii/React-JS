import React, { Component } from 'react'

 class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: ''
    }
    
  }
  handleUsernameChange = (event) =>{
    this.setState({
      username: event.target.value

    })
   
}
handleCommentsChange = event =>{
  this.setState({
    comments: event.target.value
  })
}
handleSubmit = event =>{
  alert(`${this.state.username} ${this.state.comments}`)
  event.preventDefault()
}
  
  render() {
    const  {username, comments} = this.state
      return (
    <form onSubmit={this.handleSubmit}>
      <div>
      <label>Username: </label>
      <input type='text' value={username} onChange={this.handleUsernameChange}/>
      </div>
    <div>
      <label>Comments</label>
      <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
    </div>
<button type='submit'>Submit</button>

    </form>
      )
      
  }
}

export default Form
