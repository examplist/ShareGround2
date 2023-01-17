import styled from 'styled-components';
import * as theme from 'styles/theme';

export const NotLoggedIn = styled.section`
  width: 25rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
  border-radius: 0;
  border: 1px solid black;
  padding: 0 0.5rem;
`;

export const Buttons = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  height: 2rem;

  button {
    cursor: pointer;
    flex-grow: 1;
    border: none;
    height: 2rem;
  }
`;

export const LogIn = styled.button`
  background-color: ${theme.color_sunflower};
  &:hover {
    background-color: ${theme.color_orange};
  }
`;

export const SignUp = styled.button`
  background-color: ${theme.color_carrot};
  &:hover {
    background-color: ${theme.color_pumpkin};
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
    border-radius: 0;
    border: none;
    cursor: pointer;
    color: white;
    background-color: ${theme.color_alizarin};
    &:hover {
      background-color: ${theme.color_pomegranate};
    }

    svg {
      width: 50%;
      height: 50%;
    }
  }
`;
