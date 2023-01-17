import styled from 'styled-components';
import { OnlyMessage, header_height, footer_height, screen_tiny } from 'styles/layout';
import * as theme from 'styles/theme';

export const Error = styled(OnlyMessage)``;

export const Content = styled.main`
  min-height: calc(100vh - ${header_height} - ${footer_height});
  padding: 0 1rem;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 0 1rem;

  div {
    margin-right: 1rem;
    font-size: 1rem;
  }

  @media (max-width: ${screen_tiny}) {
    display: block;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;
  padding: 0 1rem;
`;

export const Explanation = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
  min-height: 12rem;
  white-space: pre-line;
  padding: 1rem;
`;

export const File = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 8rem;
    height: 2rem;
    cursor: pointer;
    background-color: ${theme.color_sunflower};
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      background-color: ${theme.color_orange};
    }
  }
`;

export const editDelete = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 2rem;
    font-size: 1rem;
    margin: 0 0.5rem;
    border: none;
    cursor: pointer;
  }
`;

export const commentTitle = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.75rem;
`;
