import { FC } from "react";
import styled from "styled-components";
import { UserInfoProps } from "../../../interfaces";

const Container = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    p{
        font-weight: 300;
    }
`;

const UserInfo: FC<UserInfoProps> = ({ name, email, phone, children }) => {
  return (
    <>
      {children}
      <Container>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{phone}</p>
      </Container>
    </>
  );
};
export default UserInfo;
