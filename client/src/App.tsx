import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Deals from './pages/Deals';

import './App.css'

const App: React.FC = () => {

  return (
    <Router>

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/cart'>
          <Cart />
        </Route>

        <Route path='/deals'>
          <Deals />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
