import styled from 'styled-components';

// 헤더, 푸터 높이
export const header_height = '5rem';
export const footer_height = '12rem';

// 반응형
export const screen_tiny = '473px';
export const screen_small = '640px';
export const screen_medium = '768px';

export const OnlyMessage = styled.main`
  min-height: calc(100vh - ${header_height} - ${footer_height});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1.5rem;
`;
