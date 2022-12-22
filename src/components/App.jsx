import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { sortBy } from 'lodash';
import { FORMATTERS } from '@constants';
import Header from './Header';
import { MashiroFormatter } from './MashiroFormatter';
import { MarkdownStylingToHtml } from './MarkdownStylingToHtml';
import { JayFormatter } from './JayFormatter';
import { OissuFormatter } from './OissuFormatter';
import { EngirlsWikiFormatter } from './EngirlsWikiFormatter';
import '@styles/styles.less';
import '@styles/buttons.less';
import '@styles/Main.less';

const formatterLinks = sortBy(Object.values(FORMATTERS), (value) => value);

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path={`/${FORMATTERS.MASHIRO_FORMATTER}`}>
          <MashiroFormatter />
        </Route>
        <Route path={`/${FORMATTERS.MARKDOWN_STYLING_TO_HTML}`}>
          <MarkdownStylingToHtml />
        </Route>
        <Route path={`/${FORMATTERS.JAY_FORMATTER}`}>
          <JayFormatter />
        </Route>
        <Route path={`/${FORMATTERS.OISSU_FORMATTER}`}>
          <OissuFormatter />
        </Route>
        <Route path={`/${FORMATTERS.ENGIRLS_WIKI_FORMATTER}`}>
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
