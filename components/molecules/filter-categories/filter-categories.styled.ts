import styled from "styled-components";

export const HeaderFilter = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 31.25rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FilterOptions = styled.ul`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 31.25rem) {
    width: 100%;
    justify-content: flex-start;
    margin-top: .625rem;
    overflow: scroll;
  }
`;

export const FilterOption = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: .0313rem solid #e8e8e8;
  box-shadow: ${(props) => props.theme.bshadow};
  backdrop-filter: blur(.75rem);
  border-radius: .1875rem .1875rem 0 0;
  font-weight: 500;
  font-size: .75rem;
  cursor: pointer;
  transition: 0.3s ease background-color, 0.3s ease color;
  padding: .125rem 1.5625rem;
  height: 1.375rem;
  background-color: ${(props) =>
    props.isActive ? "#f6d1bc" : props.theme.card};
  font-weight: ${(props) => (props.isActive ? "600" : "normal")};
  &:hover {
    background-color: #f6d1bc;
    font-weight: 600;
  }
  @media (max-width: 31.25rem) {
    margin-bottom: .3125rem;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.25rem;
  p {
    margin-left: .625rem;
  }
`;
