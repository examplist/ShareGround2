import styled from 'styled-components';
import * as theme from 'styles/theme';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Content = styled.input`
  margin-right: 1rem;
  width: 30rem;
`;

export const Submit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 2rem;
  font-size: 1rem;
  margin: 0 0.5rem;
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${theme.color_amethyst};

  &:hover {
    background-color: ${theme.color_wisteria};
  }
`;
