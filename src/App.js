import React, {useState, useEffect} from "react";
import {Link, Switch, Route, useHistory} from 'react-router-dom'
import {Styledheader, Styledtitle, StyledButton} from './StyledApp'
import * as Yup from 'yup'
import Form from './components/Form'
import Order from './components/Order'
import Confirmation from './components/Confirmation'
import formSchema from './validation/formSchema'

const App = () => {
  const history = useHistory();

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

  const [orders, setOrders] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const onInputChange = event => {
    const {name, value} = event.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const onCheckboxChange = event => {
    const {name, checked} = event.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]:checked
      }
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    const order = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(item => formValues.toppings[item]),
      instructions: formValues.instructions.trim()
    }

    setFormValues(initialFormValues)

    setOrders([...orders, order])
    history.push('/')
  }


  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
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
{/* 
            <Route path='/confirm'>
              <Confirmation order={orders}/>
            </Route> */}

            <Route path='/'>
              <h1>Your favorite food, delivered while coding</h1>
              <Link to={'/pizza'}><StyledButton>Pizza?</StyledButton></Link>
            </Route>
          </Switch>
      </Styledtitle>
      {
        orders.map(order => {
          return (
          <Order orders={order} />
          )
        })
      }
    </div>
  );
};
export default App;
