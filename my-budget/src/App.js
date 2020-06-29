import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { FetchActions } from './components/store/actions/FetchActions';
function App({ onFetchBudget }) {
  useEffect(() => {
    onFetchBudget(1);
  }, []);
  return (
    <Fragment>
      <Router>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <div style={{ marginTop: '72px' }}>Homepage</div>
          </Route>
          <Route path="/budget">
            <div style={{ marginTop: '72px' }}>Budget page</div>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.FetchReducers.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBudget: (id) => dispatch(FetchActions.FetchBudget(id)),
  };
};

const ConnectApp = connect(null, mapDispatchToProps)(App);

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={'Loading....'}>
        <ConnectApp />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
