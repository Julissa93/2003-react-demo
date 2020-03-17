import React, {Component} from 'react'

//Two types of React components that you can create! 
//1. Class Components - known as stateFULL components because they can manage state.
//You can also define functions that will execute during the component's lifecycle. 
class MyFirstComponent extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <center>
          <h1> Counter </h1>
          {/* Need to use `this.state.count + 1` b/c you shouldn't directly modify state! */}
          <h2 onClick={() => this.setState({count: this.state.count + 1})}> {this.state.count}</h2>
        </center>
      </div>
    )
  }
}

//2. Functional Component - Known as stateLESS components b/c they don't manage state/data.
//Used for creating reusable components! 
//Here's the Counter Class component in Functional form: 
const Counter = () => {
    //Notice here we don't have a render() surrounding the return. 
    return (
        <center>
            <h1>Counter</h1>
            <h1>0</h1>
        </center>
    )
}

//export default MyFirstComponent
export default Counter
