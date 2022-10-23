import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { sortBy } from 'lodash';
import { Formatters } from '@constants';
import Header from './Header';
import { MashiroFormatter } from './MashiroFormatter';
import { MarkdownStylingToHtml } from './MarkdownStylingToHtml';
import { JayFormatter } from './JayFormatter';
import { OissuFormatter } from './OissuFormatter';
import { EngirlsWikiFormatter } from './EngirlsWikiFormatter';
import '@styles/styles.less';
import '@styles/Main.less';

const formatterLinks = sortBy(Object.values(Formatters), (value) => value);

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
        <Route path={`/${Formatters.OissuFormatter}`}>
          <OissuFormatter />
        </Route>
        <Route path={`/${Formatters.EngirlsWikiFormatter}`}>
          <EngirlsWikiFormatter />
        </Route>
        <Route exact path="/">
          <Redirect to={`/${formatterLinks[0]}`} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default hot(App);
