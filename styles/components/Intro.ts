import styled, { css } from 'styled-components';
import * as theme from 'styles/theme';

export const Section = styled.section`
  overflow-x: hidden;
`;

const article = (backgroundColor: string, color: string) => css`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  transition: all 1s ease-in-out;
  background-color: ${backgroundColor};
  color: ${color};

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
  }

  &.to-original-position {
    transform: translateX(0);
  }
`;

const fromDirection = (direction: string) => css`
  transform: translateX(${direction === 'right' ? '90%' : '-90%'});
`;

export const ManyContents = styled.article`
  ${article(theme.color_pomegranate, 'white')}
  ${fromDirection('right')}
`;

export const VariousForms = styled.article`
  ${article(theme.color_belizehole, 'white')}
  ${fromDirection('left')}
`;

export const Reaction = styled.article`
  ${article(theme.color_midnightblue, 'white')}
  ${fromDirection('right')}
`;
