import React from "react";
import {StyledForm, StyledInnerForm, StyledButton, StyledErrorDiv, StyledCheckbox} from './StyledForm'

export default function Form(props){
    const {values, onSubmit, onInputChange, onCheckboxChange, disabled, errors} = props
    return (
       <StyledForm>
           <h1>Build Your Own Pizza</h1>
           <StyledErrorDiv>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
           </StyledErrorDiv>
           <StyledInnerForm>
               <label htmlFor='nameInput'>
                   Name: &nbsp;
                   <input 
                        id='nameInput'
                        type='text'
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                   />
               </label>

               <label htmlFor='sizeInput'>
                   Size: &nbsp;
                   <select id='sizeInput' onChange={onInputChange} value={values.size} name='size'>
                       <option value=''>-- Select a Size --</option>
                       <option value='extra large'>Extra Large</option>
                       <option value='large'>Large</option>
                       <option value='medium'>Medium</option>
                       <option value='small'>Small</option>
                       <option value='extra small'>Extra Small</option>
                   </select>
               </label>
               <StyledCheckbox>
                    Toppings: &nbsp; <br/> <br/>
                    <label htmlFor='peperoniInput'>
                        Pepperoni &nbsp;
                        <input id='pepperoniInput' type='checkbox' onChange={onCheckboxChange} name='pepperoni' checked={values.toppings.pepperoni}/>
                    </label>

                    <label htmlFor='mushroomInput'>
                        Mushrooms &nbsp;
                        <input id='mushroomInput' type='checkbox' onChange={onCheckboxChange} name='mushrooms' checked={values.toppings.mushrooms}/>
                    </label>

                    <label htmlFor='baconInput'>
                        Bacon &nbsp;
                        <input id='baconInput' type='checkbox' onChange={onCheckboxChange} name='bacon' checked={values.toppings.bacon}/>
                    </label>

                    <label htmlFor='onionInput'>
                        Onion &nbsp;
                        <input id='onionInput' type='checkbox' onChange={onCheckboxChange} name='onion' checked={values.toppings.onion}/>
                    </label>
                </StyledCheckbox>
                
                Special Instructions 
                <textarea 
                    id='instructionInput'
                    name='instructions'
                    onChange={onInputChange}
                    value={values.instructions}
                />
           </StyledInnerForm>
           <StyledButton disabled={disabled}>Submit Order</StyledButton>
       </StyledForm>
    )
}