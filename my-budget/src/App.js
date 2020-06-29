import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import theme from './utils/theme';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <div style={{ marginTop: '72px' }}>Homepage</div>
          </Route>
          <Route path="/budget">
            <div style={{ marginTop: '72px' }}>Budget</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
