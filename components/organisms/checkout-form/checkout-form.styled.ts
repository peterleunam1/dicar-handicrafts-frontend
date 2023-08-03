import styled from "styled-components";

export const TitleSection = styled.p`
  font-weight: bolder;
  color: #f6d1bc;
  font-size: .9375rem;
  margin-top: 1.875rem;
  margin-bottom: .9375rem;
`;

export const HalfInput = styled.div`
  width: 45%;
  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;

export const InLineInput = styled.div`
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .9375rem 0;
  @media (max-width: 31.25rem) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
`;

export const SelectStyled = styled.select`
  width: 100%;
  margin-top: .625rem;
  margin-bottom: .625rem;
  height: 2.0625rem;
  border-radius: .3125rem;
  color: #606066;
  border: .0625rem solid rgb(202, 199, 199);
  padding-left: .9375rem;
  position: relative;
`;

export const LabelInput = styled.label`
  font-size: .8125rem;
  font-weight: 500;
  position: relative;
  small {
    position: absolute;
    bottom: -1.875rem;
    right: 0;
    color: red;
  }
`;

export const ButtonContainer = styled.div`
  width: 25%;
  @media (max-width: 31.25rem) {
    width: 100%;
    margin-top: .625rem;
  }
`;
