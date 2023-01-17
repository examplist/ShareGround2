import styled, { keyframes } from 'styled-components';
import * as theme from 'styles/theme';

const skeleton = keyframes`
  0% {
    background-color: ${theme.color_asbestos};
  }
  100% {
    background-color: ${theme.color_clouds};
  }
`;

export const Container = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  position: relative;
`;

export const Skeleton = styled.div`
  height: 100%;
  border-radius: 50%;
  animation: ${skeleton} 1s linear infinite alternate;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.color_midnightblue};
  border-radius: 50%;
  height: 100%;

  a {
    color: ${theme.color_midnightblue};
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const Photo = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const LoginContent = styled.div`
  display: none;
  position: absolute;
  top: 110%;
  width: 6rem;
  right: 0;
  text-align: right;
  z-index: 1;
  background-color: white;

  div {
    margin: 0.5rem;
  }

  &.visible {
    display: block;
  }
`;

export const LogoutButton = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const ToProfile = styled.div`
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 1rem;
  }
`;
