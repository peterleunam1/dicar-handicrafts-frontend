import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  max-width: 25rem;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  transition: 0.2s ease font-weight;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  font-size: .8125rem;
  &:hover {
    font-weight: bold;
  }
`;
