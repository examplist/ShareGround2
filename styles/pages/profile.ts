import styled from 'styled-components';
import { header_height, footer_height, screen_small, OnlyMessage } from 'styles/layout';
import * as theme from 'styles/theme';

export const Loading = styled(OnlyMessage)``;

export const AuthFailed = styled(OnlyMessage)``;

export const ExistMain = styled.main`
  min-height: calc(100vh - ${header_height} - ${footer_height});
  display: flex;
  @media (max-width: ${screen_small}) {
    flex-direction: column;
  }
`;

export const Choose = styled.section`
  padding-top: 1rem;
  width: 8rem;
  border-right: 3px solid black;

  button {
    width: 100%;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    height: 2rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background-color: transparent;
    cursor: pointer;

    &.chosen {
      color: ${theme.color_pomegranate};
    }
  }

  @media (max-width: ${screen_small}) {
    padding: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-bottom: 3px solid black;

    button {
      width: 4rem;
      margin: 0 1rem;
    }
  }
`;
