import React from 'react';
import { NavigationWrapper } from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = (props) => {
  return (
    <NavigationWrapper>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/test">Test</NavigationItem>
    </NavigationWrapper>
  );
};

export default NavigationItems;
