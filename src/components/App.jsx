import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Formatters } from 'Constants';
import Header from './Header';
import { MashiroFormatter } from './MashiroFormatter';
import { JayFormatter } from './JayFormatter';
import 'Styles/styles.less';
import 'Styles/Main.less';

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path={`/${Formatters.MashiroFormatter}`}>
          <MashiroFormatter />
        </Route>
        <Route path={`/${Formatters.JayFormatter}`}>
          <JayFormatter />
        </Route>
        <Route exact path="/">
          <MashiroFormatter />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default hot(App);
