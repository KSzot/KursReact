import React from 'react';
import { ToolbarHeader, ToolbarNav } from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
const Toolbar = (props) => {
  return (
    <ToolbarHeader>
      <ToolbarNav>
        <NavigationItems />
      </ToolbarNav>
      <div>
        <Button variant="regular">pl</Button>
        <Button variant="regular">en</Button>
      </div>
    </ToolbarHeader>
  );
};

export default Toolbar;
