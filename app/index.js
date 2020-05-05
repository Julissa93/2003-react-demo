import React from 'react'
import ReactDOM from 'react-dom'
//import MyFirstComponent from './myFirstComponent'
//import Counter from './Counter'
//import App from './App'
import PizzaApp from './PizzaApp'

//render takes two arguments: 
//first one is WHAT to render, second one is WHERE to render
ReactDOM.render(
    <PizzaApp />,
    document.getElementById('app')
)