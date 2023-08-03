import styled from "styled-components";

export const ListItem = styled.article`
  width: calc(100% - 1.25rem);
  display: flex;
  padding: 1.25rem 0 1.875rem 1.25rem;
  border-bottom: .0938rem solid #e8e8e8;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 31.25rem) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.875rem 0 3.125rem 0;
  }
`;
export const ContentRigth = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    font-weight: 550;
    @media (max-width: 31.25rem) {
      color: #f6d1bc;
    }
  }
  @media (max-width: 31.25rem) {
    width: 92%;
    margin-bottom: 1.25rem;
    background-color: ${(props) => props.theme.card};
    padding: .9375rem;
    border-radius: .625rem;
  }
`;
export const ContentLeft = styled.div`
  width: 25%;
  height: 5rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: none;
    @media (max-width: 31.25rem) {
      display: block;
      margin: 0 auto;
      display: flex;
      gap: .5rem;
      margin-left: 25%;
    }
  }
  @media (max-width: 31.25rem) {
    width: 100%;
    margin-top: 0;
  }
`;
export const ImageContainer = styled.figure`
  width: 6.25rem;
  height: 7.5rem;
  border-radius: .625rem;
  cursor: pointer;
  margin-right: 0;
  margin-left: 0;
  margin-top: .75rem;
  @media (max-width: 31.25rem) {
    width: 5rem;
    height: 6.25rem;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 31.25rem) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 1.5625rem;
  span {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Description = styled.p`
  font-size: .8125rem;
  margin-top: .3125rem;
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Links = styled.p`
  font-size: .8125rem;
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease font-weight;
  color: #606060;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
export const Text = styled.p`
  font-size: .6875rem;
  font-weight: 500;
  margin: .75rem 0;
`;
export const Strong = styled.strong`
  color: #f6d1bc;
  font-weight: bolder;
`;
export const Numbers = styled.div`
  width: 30%;
  height: 5rem;
  padding: 3.125rem 1.875rem 1.875rem 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-right: .0938rem solid #e8e8e8;

  p {
    font-size: .875rem;
  }
  strong {
    font-weight: 550;
  }
  @media (max-width: 31.25rem) {
    display: none;
  }
`;
export const Prices = styled.div<{ border?: string; margin?: string }>`
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.margin || "0"};
  border-bottom: ${(props) => props.border || "none"};
  strong {
    font-size: .875rem;
  }
  @media (max-width: 31.25rem) {
    &:first-of-type {
      margin-top: .625rem;
    }
  }
`;
