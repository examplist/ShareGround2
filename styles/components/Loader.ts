import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

// 자료가 더 없는 경우

export const End = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

// 자료가 더 있는 경우

const fade = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
`;

export const Loader = styled.div`
  margin-top: 1rem;
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
`;

const L = styled.div`
  width: 1rem;
  opacity: 0.2;
`;

export const L1 = styled(L)`
  background-color: #2980b9;
  animation: ${fade} 1s 0s infinite;
`;
export const L2 = styled(L)`
  background-color: #3498db;
  animation: ${fade} 1s 0.1s infinite;
`;
export const L3 = styled(L)`
  background-color: #27ae60;
  animation: ${fade} 1s 0.2s infinite;
`;
export const L4 = styled(L)`
  background-color: #2ecc71;
  animation: ${fade} 1s 0.3s infinite;
`;
