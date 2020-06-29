import React from 'react';
import { NavigationWrapper } from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = (props) => {
  return (
    <NavigationWrapper>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/budget">Test</NavigationItem>
    </NavigationWrapper>
  );
};

export default NavigationItems;
