import React from "react";
import {Link, Switch, Route} from 'react-router-dom'
import {Styledheader, Styledtitle, StyledButton} from './StyledApp'
import Form from './components/Form'

const App = () => {
  return (
    <div>
      <Styledheader>
        <h2>Lambda Eats</h2>
        <Link to={'/'}>Home</Link>
      </Styledheader>
      <Styledtitle>
          <Switch>
            <Route path='/pizza'>
              <Form/>
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
