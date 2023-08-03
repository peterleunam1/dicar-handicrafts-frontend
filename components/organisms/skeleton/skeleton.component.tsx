import {
  SkeletonContainer,
  SkeletonW,
  SkeletonImage,
  Title,
  Price,
} from "./skeleton.styled";

export default function Skeleton() {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SkeletonContainer>
      {skeleton.map((item) => (
        <SkeletonW key={item}>
          <SkeletonImage />
          <Title />
          <Price />
        </SkeletonW>
      ))}
    </SkeletonContainer>
  );
}
