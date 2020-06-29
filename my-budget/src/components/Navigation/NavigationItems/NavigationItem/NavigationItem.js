import React from 'react';
import { StyledLi, StyledLink } from './NavigationItem.css';

const NavigationItem = (props) => {
  return (
    <StyledLi>
      <StyledLink href={props.link}>{props.children}</StyledLink>
    </StyledLi>
  );
};

export default NavigationItem;
