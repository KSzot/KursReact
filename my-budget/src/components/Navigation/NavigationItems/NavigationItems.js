import React from 'react';
import { NavigationWrapper } from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { useTranslation } from 'react-i18next';
const NavigationItems = (props) => {
  const { t } = useTranslation();
  return (
    <NavigationWrapper>
      <NavigationItem link="/" exact>
        {t('Home')}
      </NavigationItem>
      <NavigationItem link="/budget">{t('Budget')}</NavigationItem>
    </NavigationWrapper>
  );
};

export default NavigationItems;
