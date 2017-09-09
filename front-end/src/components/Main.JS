import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import BeerList from './BeerList.js';
import BeerPage from './BeerPage.js';
const Main = () => (
  <Router>
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={BeerList}/>
        <Route path='/beer/:id' render={BeerPage}/>
      </Switch>
    </main>
  </div>
  </Router>
)

export default Main;