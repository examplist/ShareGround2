import styled from 'styled-components';
import { screen_tiny } from 'styles/layout';
import * as theme from 'styles/theme';

export const Container = styled.div`
  position: relative;
  margin-right: 1.25rem;
  height: 100%;
  display: flex;
`;

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  button {
    font-size: 1.25rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${theme.color_midnightblue};
    &:hover {
      background-color: ${theme.color_midnightblue};
      color: ${theme.color_clouds};
    }
  }
`;

export const TitleNarrowText = styled.span`
  display: none;
  @media (max-width: ${screen_tiny}) {
    display: inline;
  }
`;

export const TitleWideText = styled.span`
  display: inline;
  @media (max-width: ${screen_tiny}) {
    display: none;
  }
`;

export const Categories = styled.div`
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: white;
  width: 6rem;

  div {
    margin: 0.5rem;
  }

  div a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }

  &.visible {
    display: block;
  }
`;
