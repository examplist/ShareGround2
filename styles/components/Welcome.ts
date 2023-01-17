import styled, { keyframes } from 'styled-components';

const imgWidth = '2000px';
const imgHeight = '500px';

const moving = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-${imgWidth});
  }
`;

export const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

export const Carousel = styled.div`
  display: flex;
  width: calc(2 * ${imgWidth});
  animation: ${moving} 30s linear infinite;
`;

export const CarouselItem = styled.img`
  width: ${imgWidth};
  height: ${imgHeight};
`;

export const Text = styled.div`
  position: absolute;
  padding: 1rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.505);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
`;
