import React from "react";
import Order from './Order'
import {StyledInnerForm} from './StyledForm'

export default function Confirmation(props){
    const {order} = props
    
    if(!order){
        return <h3>Loading orders...</h3>
    }

    return (
       <StyledInnerForm>
            {
                order.map(o => {
                return (
                <Order orders={o} />
                )
                })
            }
       </StyledInnerForm>
    )
}