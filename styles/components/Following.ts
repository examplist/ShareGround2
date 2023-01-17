import styled from 'styled-components';
import * as theme from 'styles/theme';

export const toTop = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  top: calc(85%);
  right: 1rem;
  background: ${theme.color_clouds};
  color: ${theme.color_wetasphalt};
  cursor: pointer;
  font-size: 1.5rem;
  border: 3px dashed ${theme.color_wetasphalt};
  z-index: 1;
`;
