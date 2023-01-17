import styled from 'styled-components';
import { OnlyMessage } from 'styles/layout';
import * as theme from 'styles/theme';

export const Main = styled(OnlyMessage)`
  flex-direction: column;
`;

export const Message = styled.h2`
  font-size: 2rem;
`;

export const toHome = styled.h2`
  a {
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
    color: ${theme.color_asbestos};
  }
`;
