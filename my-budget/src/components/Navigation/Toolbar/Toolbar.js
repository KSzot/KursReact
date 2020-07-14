import React from 'react';
import { ToolbarHeader, ToolbarNav } from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import { useTranslation } from 'react-i18next';
const Toolbar = (props) => {
  const { i18n } = useTranslation();
  return (
    <ToolbarHeader>
      <ToolbarNav>
        <NavigationItems />
      </ToolbarNav>
      <div>
        <Button variant="regular" onClick={() => i18n.changeLanguage('pl')}>
          {' '}
          {/*i18n.changeLanguage('pl')}>*/}
          pl
        </Button>
        <Button variant="regular" onClick={() => i18n.changeLanguage('en')}>
          {' '}
          {/*i18n.changeLanguage('en')}>*/}
          en
        </Button>
      </div>
    </ToolbarHeader>
  );
};

export default Toolbar;
