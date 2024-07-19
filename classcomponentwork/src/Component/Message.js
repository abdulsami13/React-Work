



import React,{Component} from "react";



class Message extends Component {

    constructor(){
super()
this.state = {
mesage:"welcome visiter"
    }

}

changeMessage(){

    this.setState({
        mesage:"thank you for subscribing"
    })
}

    render(){
    return(
    <div>
       <h1>
        {this.state.mesage}
        </h1>
        <button onClick={()=>{this.changeMessage()}}>
            subscribe
</button>

        </div>
    )
    }

}
export default Message