import styled from "styled-components";

export const AsideMenu = styled.aside<{
  transform: string;
  height: string;
  mg: string;
  pt: string;
}>`
  background-color: ${({ theme }) => theme.background};
  width: 16.25rem;
  height: ${(props) => props.height};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: hidden;
  margin-top: ${(props) => props.mg};
  transition: 0.5s ease transform;
  z-index: 3;
  box-shadow: ${({ theme }) => theme.bshadow};
  transform: ${(props) => props.transform};
  padding: 1.5625rem 2.1875rem;
  padding-top: ${(props) => props.pt};

  @media (max-width: 31.25rem) {
    width: 62%;
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Close = styled.span<{ display: string }>`
  width: 100%;
  margin-bottom: 1.5625rem;
  display: ${(props) => props.display};
  display: flex;
  justify-content: flex-end;
`;

export const ListItem = styled.li<{ color?: string }>`
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:first-of-type {
    margin-top: 1.5625rem;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1.5625rem;
    border-bottom: .0625rem solid #e8e8e8;
  }
  p {
    width: 88%;
    display: flex;
    justify-content: flex-start;
    color: ${(props) => props.color || ""};

    &:hover {
      font-weight: bolder;
    }
  }
`;

export const SocialContainer2 = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 31.25rem) {
    display: block;
    width: min-content;
    margin-left: 20%;
  }
`;
