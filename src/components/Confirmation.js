import React from "react";
import {StyledContainer} from './StyledForm'

export default function Confirmation(props){
    const {order} = props

    console.log(order);

    function checkToppings(){
        if(!order.toppings){
            return (
                <div>
                    <p>Instructions:</p>
                    <p>{order.instructions}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Congrats! Pizza is on it's way!</h1>
                    <h2>Your order is:</h2>
                    <h2>Name: {order.name}</h2>
                    <h3>Size: {order.size}</h3>
                    <p>Toppings:</p>
                    <ul>
                        {order.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
                    </ul>
                    <p>Instructions:</p>
                    <p>{order.instructions}</p>
                </div>
            )
        }
    }
    
    if(!order){
        return <h3>Loading orders...</h3>
    }

    return (
       <div>
            <h1>Congrats! Pizza is on it's way!</h1>
            <h2>Your order is:</h2>
            <h2>Name: {order.name}</h2>
            <h3>Size: {order.size}</h3>
            {checkToppings()}
       </div>
    )
}