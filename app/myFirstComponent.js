import React, {Component} from 'react'

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

export default MyFirstComponent
