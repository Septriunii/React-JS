import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const {name, aka} = this.props
        return (
        <h1>Welcome {name} a.k.a {aka}</h1>
        )
    }
}

export default Welcome