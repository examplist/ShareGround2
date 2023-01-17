import styled from 'styled-components';
import { header_height, footer_height } from 'styles/layout';

export const Main = styled.main`
  min-height: calc(100vh - ${header_height} - ${footer_height});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const LoggedIn = styled.section`
  font-size: 2rem;
`;
