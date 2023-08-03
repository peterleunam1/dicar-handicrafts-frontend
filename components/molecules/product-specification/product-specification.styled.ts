import styled from "styled-components";

export const Text = styled.p`
  margin: 1.125rem 0;
  font-size: .8125rem;
`;

export const AccentTex = styled.strong<{
  size?: string;
  ml?: string;
  color?: string;
}>`
  color: ${(props) => props.color || "#f6d1bc"};
  font-size: ${(props) => props.size};
  margin-left: ${(props) => props.ml};
`;

export const Price = styled.p`
  font-size: 1.4375rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 1.125rem;
`;
