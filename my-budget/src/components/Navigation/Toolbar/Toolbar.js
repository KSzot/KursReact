import React from 'react';
import { ToolbarHeader, ToolbarNav } from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
const Toolbar = (props) => {
  return (
    <ToolbarHeader>
      <ToolbarNav>
        <NavigationItems />
      </ToolbarNav>
    </ToolbarHeader>
  );
};

export default Toolbar;
