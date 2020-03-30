import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from '../homepage/Homepage';
import RecipeDetail from '../recipe/RecipeDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/recipes" />} />
        <Route exact path="/recipes" component={Homepage} />
        <Route path="/recipes/:id" component={RecipeDetail} />
      </Switch>
    </Router>
  );
}

export default App;
