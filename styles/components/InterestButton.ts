import styled from 'styled-components';
import * as theme from 'styles/theme';

export const Section = styled.section`
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color_orange};
  color: ${theme.color_orange};
  background-color: white;
`;
