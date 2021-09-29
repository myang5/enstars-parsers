import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Formatters } from 'Constants';
import Header from './Header';
import { MashiroFormatter } from './MashiroFormatter';
import 'Styles/styles.less';

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path={`/${Formatters.MashiroFormatter}`}>
          <MashiroFormatter />
        </Route>
        <Route path={`/${Formatters.JayFormatter}`}>{/* <Main /> */}</Route>
        <Route exact path="/">
          <MashiroFormatter />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default hot(App);
