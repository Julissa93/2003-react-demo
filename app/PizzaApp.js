import React, {Component} from 'react'
import Topping from './Topping'

//Class Components - stateFULL component because they can manage state. 
//You can also define functions that will execute during the component's lifecycle. 
class PizzaApp extends Component {
    constructor() {
        super()
        this.state = {
            favoriteTopping: "Cheese"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (topping) {
        //console.log('Hello from handleClick', topping)
        this.setState({
            favoriteTopping: topping
        })
    }

    render() {
        return (
            <div>
                <h1>Your favorite pizza topping is: {this.state.favoriteTopping}</h1>
                <ul>
                    <Topping name="Pepperoni" handleClick={this.handleClick} favoriteTopping={this.state.favoriteTopping}/>
                    <Topping name="Cheese" handleClick={this.handleClick} favoriteTopping={this.state.favoriteTopping}/>
                    <Topping name="Olives" handleClick={this.handleClick} favoriteTopping={this.state.favoriteTopping}/>
                </ul>
            </div>
        )
    }
}


//NOT DRY :( 
{/*const Cheese = () => {
    return <li>Cheese</li>
}

const Pepperoni = () => {
    return <li>Pepperoni</li>
}

const Olives = () => {
    return <li>Olives</li>
}*/}

export default PizzaApp;