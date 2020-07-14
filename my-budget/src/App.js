import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Budget from './pages/Budget/Budget';
function App() {
  return (
    <Fragment>
      <Router>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <div style={{ marginTop: '72px' }}>Homepage</div>
          </Route>
          <Route path="/budget">
            <Budget />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={'Loading....'}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
