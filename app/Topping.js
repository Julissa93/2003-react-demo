import React from 'react'

//Functional component - stateLESS component b/c they don't manage state/data. 
//Used for creating reusable components!
const Topping = (props) => {
    console.log('PROPS: ', props)
    const isUnderlined = (props.name === props.favoriteTopping)
    return <li className={isUnderlined ? 'underlined' : ''} onClick={() => props.handleClick(props.name)}>{props.name}</li>
}

export default Topping;