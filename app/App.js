import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Julissa",
      age: 25
    }
  }
  render() {
    return (
      <div>
        <MyFirstComponent {...this.state}/>
        {/* 
        <MyFirstComponent name="Orlando"/>
        <MyFirstComponent name="Oscar"/>
        */}
      </div>
    )
  }
}

class MyFirstComponent extends React.Component {
  render() {
    console.log('PROPS: ', this.props)
    return <h1>Hello {this.props.name} Age = {this.props.age}</h1>
  }
}

export default App;