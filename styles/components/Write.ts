import styled, { css } from 'styled-components';
import * as theme from 'styles/theme';

const button = (width: string, color: string, hoverColor: string) => css`
  width: ${width};
  height: 2rem;
  margin-right: 1rem;
  background-color: ${color};
  cursor: pointer;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${hoverColor};
  }
`;

export const Select = styled.section`
  height: 2rem;
  margin-bottom: 1rem;
  display: flex;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    font-size: 1rem;
  }

  select {
    background-color: white;
    border-radius: 0;
    border: 1px solid black;
    width: 7rem;
    padding-left: 0.25rem;
  }
`;

export const Title = styled.input`
  display: block;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  border: none;
  border-bottom: 2px solid black;
  padding: 0 0.5rem;
`;

export const Explanation = styled.textarea`
  display: block;
  width: 100%;
  height: 20rem;
  font-size: 1rem;
  border: none;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  resize: none;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const File = styled.section`
  display: flex;
  margin-bottom: 1.25rem;

  button {
    ${button('6rem', theme.color_peterriver, theme.color_belizehole)}
    color: white;
  }

  div {
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
`;

export const Buttons = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  button {
    ${button('4rem', theme.color_emerald, theme.color_nephritis)}
  }
`;
