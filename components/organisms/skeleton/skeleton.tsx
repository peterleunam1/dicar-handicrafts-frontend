import styled, { keyframes } from "styled-components";
const PlaceholderShimmer = keyframes`
    0% {
        background-position: -468px 0
    }
    100% {
        background-position: 468px 0
    }
`;

const SkeletonContainer = styled.span`
  margin: 22px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      gap: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    `;
const SkeletonW = styled.div`
  width: 210px;
  height: 272px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
const SkeletonImage = styled.div`
  width: 100%;
  height: 232px;
  background: #f6f7f8;
  background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  animation: ${PlaceholderShimmer} 2s linear infinite forwards;
  border-radius: 15px;
  `;
const Price = styled.div`
  width: 100px;
  height: 10px;
  margin: 5px 0;
  align-self: flex-end;
  border-radius: 5px;
  background: #f6f7f8;
  background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  animation: ${PlaceholderShimmer} 2s linear infinite forwards;
  `;
const Title = styled.div`
  width: 90%;
  height: 20px;
  border-radius: 10px;
  background: #f6f7f8;
  background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  animation: ${PlaceholderShimmer} 2s linear infinite forwards;
  `;
export default function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
      <SkeletonW>
        <SkeletonImage />
        <Price />
        <Title />
      </SkeletonW>
    
    </SkeletonContainer>
  );
}
