import React from 'react';
import {Switch, Route} from 'react-router-dom';

import BeerList from './BeerList.js';

const Main = () => (
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={BeerList}/>
        <Route path='/beer/:name' component={BeerPage}/>
      </Switch>
    </main>
  </div>
)

export default Main;