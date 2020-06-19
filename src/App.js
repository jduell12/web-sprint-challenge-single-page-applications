import React, {useState, useEffect} from "react";
import {Link, Switch, Route} from 'react-router-dom'
import {Styledheader, Styledtitle, StyledButton} from './StyledApp'
import * as Yup from 'yup'
import Form from './components/Form'
import formSchema from '../validation/formSchema'

const App = () => {
  const initialFormValues = {
    name: '',
    size: '',
    toppings: {
      pepperoni: false,
      mushrooms: false, 
      bacon: false,
      onion: false,
    },
    instructions: ''
  }

  const initialFormErrors = {
    name: '',
    size: '',
  }

  const initialOrder = []
  const initialDisabled = true

  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const onInputChange = event => {

  }

  const onCheckboxChange = event => {

  }

  const onSubmit = event => {
    event.preventDefault()

    const order = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(item => formValues.toppings[item]),
      instructions: formValues.instructions.trim()
    }
  }

  useEffect(() => {

  }, [formValues])

  return (
    <div>
      <Styledheader>
        <h2>Lambda Eats</h2>
        <Link to={'/'}>Home</Link>
      </Styledheader>
      <Styledtitle>
          <Switch>
            <Route path='/pizza'>
              <Form 
                values={formValues}
                onInputChange={onInputChange}
                onCheckboxChange = {onCheckboxChange}
                onSubmit = {onSubmit}
                disabled={disabled}
                errors = {formErrors}
              />
            </Route>

            <Route path='/'>
              <h1>Your favorite food, delivered while coding</h1>
              <Link to={'/pizza'}><StyledButton>Pizza?</StyledButton></Link>
            </Route>
          </Switch>
      </Styledtitle>
    </div>
  );
};
export default App;
