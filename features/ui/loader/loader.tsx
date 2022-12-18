import styled, { keyframes } from "styled-components";

const loadingKeyFrames = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingImage = styled.img`
  animation-name: ${loadingKeyFrames};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export function Loader() {
  return <LoadingImage src="/icons/loading.svg"></LoadingImage>;
}
