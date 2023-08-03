import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.card};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  padding: 1.875rem 0;
  color: ${(props) => props.theme.text};
  @media (max-width: 31.25rem) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ListItems = styled.ul`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 31.25rem) {
    width: 90%;
  }
`;

export const ListItem = styled.li<{
  bold?: number;
  size?: string;
  margin?: string;
}>`
  width: 85%;
  font-size: ${(props) => props.size || ".9375rem"};
  font-weight: ${(props) => props.bold || 300};
  margin-bottom: ${(props) => props.margin || "0"};
  cursor: pointer;
`;

export const CopyandRight = styled.div`
  width: 60%;
  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 350;
  font-size: .875rem;
  max-width: 80%;
  @media (max-width: 31.25rem) {
    text-align: left;
    padding-left: 1.25rem;
    margin-top: 1.875rem;
  }
`;
