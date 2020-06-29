import styled from 'styled-components';

export const ToolbarHeader = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.gray.normal};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export const ToolbarNav = styled.nav`
  height: 100%;
  @media (max-width: 499px) {
    display: none;
  }
`;
