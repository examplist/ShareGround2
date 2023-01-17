import styled from 'styled-components';
import * as theme from 'styles/theme';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 1.5rem;

  ${Section}.edit-mode & {
    display: none;
  }
`;

const Button = styled.button`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 0;
  width: 4rem;
  height: 2rem;
`;

export const Input = styled.input`
  padding: 0 0.5rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  width: 12rem;
  display: none;

  ${Section}.edit-mode & {
    display: block;
  }
`;

export const Edit = styled(Button)`
  background-color: ${theme.color_turquoise};
  &:hover {
    background-color: ${theme.color_greensea};
  }

  ${Section}.edit-mode & {
    display: none;
  }
`;

export const Cancel = styled(Button)`
  display: none;
  background-color: ${theme.color_emerald};
  margin-right: 1rem;
  &:hover {
    background-color: ${theme.color_nephritis};
  }
  ${Section}.edit-mode & {
    display: block;
  }
`;

export const Confirm = styled(Button)`
  display: none;
  background-color: ${theme.color_peterriver};
  &:hover {
    background-color: ${theme.color_belizehole};
  }
  ${Section}.edit-mode & {
    display: block;
  }
`;
