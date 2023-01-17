import styled from 'styled-components';
import { header_height, screen_medium } from 'styles/layout';

export const Container = styled.div`
  display: none;

  @media (max-width: ${screen_medium}) {
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const Search = styled.input`
  display: none;
  z-index: 1;
  position: absolute;
  top: ${header_height};
  left: 0;
  width: 100vw;
  height: calc(${header_height} * 0.7);
  border: 1px solid black;
  border-radius: 0;
  border-left: none;
  border-right: none;
  padding-left: 0.25rem;

  &.visible {
    display: block;
  }
`;

export const Result = styled.div`
  display: none;
  z-index: 1;
  position: absolute;
  top: calc(${header_height} * 1.7);
  left: 0;
  width: 97vw;
  background-color: white;
  height: 10rem;
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
