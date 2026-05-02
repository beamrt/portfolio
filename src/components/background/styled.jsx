import styled, { keyframes } from 'styled-components';

const starGlow = keyframes`
  10% {
    opacity: 0.3;
    transform: scale(0.8) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    opacity: 0.3;
    transform: scale(0.8) rotate(0deg);
  }
`;

export const BackgroundColor = styled.div`
  /* background: #faf4fa; */
  position: relative;
  overflow: none;
`;

export const DecoBackground = styled.div`
  width: auto;
  z-index: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0.8;
  animation: ${starGlow} 3s infinite ease-in-out;

  * {
    pointer-events: none;
  }
`;
