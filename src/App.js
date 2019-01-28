import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import RestPage from './components/RestPage';
import * as ROUTES from './utils/routes';
import './styles/styles.scss';

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path={ROUTES.SEARCH} component={SearchPage} />
      <Route exact path={ROUTES.REST + '/:id'} component={RestPage} />
    </Switch>
  </div>
);


export default App;
