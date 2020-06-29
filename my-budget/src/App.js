import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import theme from './utils/theme';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toolbar />
    </ThemeProvider>
  );
}

export default App;
