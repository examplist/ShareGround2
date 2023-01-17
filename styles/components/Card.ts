import styled from 'styled-components';
import * as theme from 'styles/theme';

export const Card = styled.article`
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 2px solid;
  border-color: ${({ type }: { type: string }) => {
    switch (type) {
      case 'aud':
        return theme.color_pomegranate;
      case 'doc':
        return theme.color_belizehole;
      case 'img':
        return theme.color_sunflower;
      case 'vid':
        return theme.color_wisteria;
      default:
        return 'black';
    }
  }};
`;

export const FileType = styled.div`
  width: 4rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const Others = styled.div`
  font-size: 1rem;
`;
