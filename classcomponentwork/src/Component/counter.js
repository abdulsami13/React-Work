



import React,{Component} from "react";



class Count extends Component {

    constructor(props){
super(props)
this.state = {
count:0
    }

}

changeMessage(){

    // this.setState({
    //     count:this.state.count+1
    // },()=>{console.log("call back function",this.state.count)})
  this.setState((prevState)=>({
   count:prevState.count+1
  }))

}


increatementFive(){
   this.changeMessage()
   this.changeMessage()
   this.changeMessage()
   this.changeMessage()
   this.changeMessage()
   
    

}
    render(){
    return(
    <div>
       <h1>
        {this.state.count}
        </h1>
        <button onClick={()=>{this.increatementFive()}}>
            subscribe
</button>

        </div>
    )
    }

}
export default Count