import React, { Component } from 'react'

 class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true 
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Hello Eren!</div>
    
    // return this.state.isLoggedIn ? (
    // <div>Welcome Eren!</div>) : (
    // <div>Welcome Guest!</div>)

    // let message
    // if (this.state.isLoggedIn){
    //     message =  <div>Welcome Eren!</div>
        
    // }else{
    //     message =  <div>Welcome Guest!</div>
    // }
    // return <div>{message}</div>

    // if (this.state.isLoggedIn){
    //     return <div>Welcome Eren!</div>
        
    // }else{
    //     return <div>Welcome Guest!</div>

    // }

  }
}

export default UserGreetings
