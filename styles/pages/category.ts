import styled from 'styled-components';
import { OnlyMessage, header_height, footer_height } from 'styles/layout';

export const Error = styled(OnlyMessage)``;

export const Main = styled.main`
  min-height: calc(100vh - ${header_height} - ${footer_height});
  padding: 2rem;
`;

export const Category = styled.h1`
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  font-size: 2rem;
`;
