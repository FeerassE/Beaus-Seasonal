import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import BeerList from './BeerList.js';
import BeerPage from './BeerPage.js';

// Router changes between a list of seasonal products and a single product page
const Main = () => (
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={BeerList}/>
        <Route path='/beer/:id' component={BeerPage}/>
      </Switch>
    </main>
  </div>
)

export default Main;