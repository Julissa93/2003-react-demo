import React, {Component} from 'react'

//Let's make a pizza app! Yummm.
/*const Cheese = () => {
    return (<li>Cheese</li>)
}

const Olives = () => {
    return (<li>Olives</li>)
}

const Pepperoni = () => {
    return (<li>Pepperoni</li>)
}*/
const Topping = (props) => {
    //console.log('PROPS: ', props)
    const isUnderlined = (props.type === props.favoriteTopping)
    return <li className={isUnderlined ? 'underlined': ''} onClick={() => props.handleClick(props.type)}>{props.type}</li>
}

//You can 
class ToppingList extends Component {
    constructor(props) {
        super(props)
        //console.log('Props in Topping List Component', this.props)
        this.state = {
            favoriteTopping: 'Cheese',
            toppings: ['Cheese', 'Pepperoni', 'Olives']
        }
        //Don't forget to bind the this context to your handleClick!
        this.handleClick = this.handleClick.bind(this) 
    }

    //Need to create functionality for changing our favorite topping every time the user clicks!
    handleClick (topping) {
        this.setState({
            favoriteTopping: topping
        })
    }

    componentDidMount() {
        console.log('Topping List mounted! ', this.state)
    }

    render() {
        console.log('topping list RENDERED!')
        return (
            <div>
                <h1>Your favorite pizza topping is: {this.state.favoriteTopping}</h1>
                <ul>
                    {/* Let'say I want create a component for each topping on my list like this: 
                        <Cheese />
                        <Pepperoni />
                        <Olives />
                    */}
                    
                    {/* 
                    Hmm... Is this very DRY?
                    NO WAY! 
                    - Remember when  I said React allows us to easily reuse components? This works by using PROPS!
                    - Props are very similar to HTML attributes and they're properties that are used to pass data from one React component to another. 
                    - Each React component has its own props object and you can pass props to BOTH classical and functional components. 
                    */}
                    {/*<Topping type='Cheese' handleClick={this.handleClick} favoriteTopping={this.state.favoriteTopping}/>
                    <Topping type='Pepperoni' handleClick={this.handleClick} favoriteTopping={this.state.favoriteTopping} />
                    <Topping type='Olives' handleClick={this.handleClick} favoriteTopping={this.state.favoriteTopping} />*/

                    
                        /* Instead of rendering the Topping component three seperate times we can just map through our toppings array! */
                        this.state.toppings.map((topping, index )=>( 
                        <Topping key={index} type={topping} favoriteTopping={this.state.favoriteTopping} handleClick={this.handleClick}/>)
                      )
                    }
                </ul>
            </div>
        )
    } 
}

export default ToppingList