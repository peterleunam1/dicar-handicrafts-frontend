import styled from "styled-components";

export const TotalComplete = styled.div`
  width: 100%;
  border-bottom: .0625rem solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .8125rem;
  font-weight: bold;
`;
export const TotalRight = styled.div`
  width: 76%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  @media (max-width: 31.25rem) {
    width: 30%;
  }
`;
export const TotalLeft = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1.25rem;
  border-left: .0625rem solid #e8e8e8;
  margin: .9375rem 0;
  @media (max-width: 31.25rem) {
    width: 70%;
  }
`;
export const SubTotalComplete = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .8125rem;
  font-weight: normal;
  background-color: ${(props) => props.theme.card};
  padding: .3125rem .9375rem;
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .3125rem;
  }
`;
export const TotalContainer = styled.div`
  padding: .3125rem .9375rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .8125rem;
  font-weight: bold;
  margin-bottom: .9375rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
