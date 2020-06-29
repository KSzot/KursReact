import React from 'react';
import { StyledLi, StyledLink } from './NavigationItem.css';

const NavigationItem = (props) => {
  return (
    <StyledLi>
      <StyledLink to={props.link} exact={props.exact}>
        {props.children}
      </StyledLink>
    </StyledLi>
  );
};

export default NavigationItem;
