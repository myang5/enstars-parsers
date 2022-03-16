import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Formatters } from '@constants';
import Header from './Header';
import { MashiroFormatter } from './MashiroFormatter';
import { MarkdownStylingToHtml } from './MarkdownStylingToHtml';
import { JayFormatter } from './JayFormatter';
import { HumanComedyFormatter } from './HumanComedyFormatter';
import '@styles/styles.less';
import '@styles/Main.less';

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path={`/${Formatters.MashiroFormatter}`}>
          <MashiroFormatter />
        </Route>
        <Route path={`/${Formatters.MarkdownStylingToHtml}`}>
          <MarkdownStylingToHtml />
        </Route>
        <Route path={`/${Formatters.JayFormatter}`}>
          <JayFormatter />
        </Route>
        <Route path={`/${Formatters.HumanComedyFormatter}`}>
          <HumanComedyFormatter />
        </Route>
        <Route exact path="/">
          <MashiroFormatter />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default hot(App);
