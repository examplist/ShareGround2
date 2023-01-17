import styled from 'styled-components';
import { header_height, screen_tiny } from 'styles/layout';
import * as theme from 'styles/theme';

export const Header = styled.header`
  height: ${header_height};
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${theme.color_clouds};
  color: ${theme.color_midnightblue};
`;

export const Logo = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;

  a {
    color: ${theme.color_midnightblue};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.25rem;
    &:hover {
      background-color: ${theme.color_midnightblue};
      color: ${theme.color_clouds};
    }
  }
`;

export const Empty1 = styled.div`
  @media (max-width: ${screen_tiny}) {
    flex-grow: 1;
  }
`;

export const Empty2 = styled.div`
  flex-grow: 1;
  @media (max-width: ${screen_tiny}) {
    flex-grow: 0;
  }
`;

export const Create = styled.div`
  margin-right: 1.25rem;
  display: flex;
  align-items: center;

  a {
    color: ${theme.color_midnightblue};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.25rem;
  }
`;
