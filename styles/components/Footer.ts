import styled from 'styled-components';
import { footer_height } from 'styles/layout';
import * as theme from 'styles/theme';

export const Footer = styled.footer`
  height: ${footer_height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color_clouds};

  div {
    margin: 0.5rem 0;
    color: ${theme.color_midnightblue};
    font-weight: 500;
  }
`;
