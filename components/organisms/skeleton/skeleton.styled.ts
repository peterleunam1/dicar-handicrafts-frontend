import styled, { keyframes } from "styled-components";

export const PlaceholderShimmer = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 29.25rem 0
  }
`;

export const SkeletonContainer = styled.span`
  margin: 1.375rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.875rem;
  @media (max-width: 31.25rem) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: .625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const SkeletonW = styled.div`
  width: 13.125rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
`;
export const SkeletonImage = styled.div`
  width: 100%;
  height: 14.5rem;
  background: ${(props) => props.theme.skeleton};
  background-image: ${(props) => props.theme.skeletonGradient};
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  animation: ${PlaceholderShimmer} 2s linear infinite forwards;
  border-radius: .9375rem;
`;
export const Price = styled.div`
  width: 6.25rem;
  height: .625rem;
  margin: .3125rem 0;
  align-self: flex-end;
  border-radius: .3125rem;
  background: ${(props) => props.theme.skeleton};
  background-image: ${(props) => props.theme.skeletonGradient};
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  animation: ${PlaceholderShimmer} 2s linear infinite forwards;
`;
export const Title = styled.div`
  width: 90%;
  height: 1.25rem;
  border-radius: .625rem;
  background: ${(props) => props.theme.skeleton};
  background-image: ${(props) => props.theme.skeletonGradient};
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  animation: ${PlaceholderShimmer} 2s linear infinite forwards;
`;
