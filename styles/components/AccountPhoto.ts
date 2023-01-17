import styled from 'styled-components';
import * as theme from 'styles/theme';

const imgSize = '8rem';

export const Section = styled.section`
  margin-bottom: 2.25rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${imgSize};
  height: ${imgSize};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Edit = styled.button`
  position: absolute;
  width: calc(${imgSize} * 0.2);
  height: calc(${imgSize} * 0.2);
  bottom: calc(${imgSize} * -0.1);
  right: calc(${imgSize} * -0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color_silver};
  border-radius: 0;
  background-color: ${theme.color_clouds};
  &:hover {
    background-color: ${theme.color_silver};
  }
`;
