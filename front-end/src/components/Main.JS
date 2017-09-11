import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import BeerList from './BeerList.js';
import NewBeerPage from './NewBeerPage.js';

const Main = () => (
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={BeerList}/>
        <Route path='/beer/:id' component={NewBeerPage}/>
      </Switch>
    </main>
  </div>
)

export default Main;