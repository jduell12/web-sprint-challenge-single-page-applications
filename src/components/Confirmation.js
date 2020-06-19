import React from "react";
import {StyledContainer} from './StyledForm'

export default function Confirmation({orders}){
    if(!orders){
        return <h3>Loading orders...</h3>
    }

    return (
        <StyledContainer>
            <h2>Name: {orders.name}</h2>
            <h3>Size: {orders.size}</h3>
            <p>Toppings:</p>
            <ul>
                {orders.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
            </ul>
            <p>Instructions:</p>
            <p>{orders.instructions}</p>
        </StyledContainer>
    )
}