import styled from 'styled-components';
import * as theme from 'styles/theme';

export const Comment = styled.article`
  margin-bottom: 1rem;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
`;

export const WriterPhoto = styled.div`
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const WriterName = styled.div`
  margin-right: 0.5rem;
  font-weight: 600;
`;

export const Delete = styled.div`
  display: flex;
  justify-content: right;

  button {
    width: 4rem;
    height: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: white;
    border: none;
    background-color: ${theme.color_alizarin};

    &:hover {
      background-color: ${theme.color_pomegranate};
    }
  }
`;
