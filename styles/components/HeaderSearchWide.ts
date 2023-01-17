import styled from 'styled-components';
import { screen_medium } from 'styles/layout';

export const Container = styled.div`
  margin-right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  width: 15rem;
  position: relative;

  @media (max-width: ${screen_medium}) {
    display: none;
  }
`;

export const Search = styled.input`
  width: 100%;
  height: 80%;
  padding-left: 0.25rem;
  border: none;
  border-radius: 0;
`;

export const Result = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  top: 100%;
  background-color: white;
  height: 10rem;
  width: 100%;
  overflow-y: auto;
  box-shadow: 0.1rem 0.1rem rgba(0, 0, 0, 0.128);

  div {
    margin: 0.5rem;
  }

  div a {
    text-decoration: none;
    color: black;
  }

  &.visible {
    display: block;
  }
`;
