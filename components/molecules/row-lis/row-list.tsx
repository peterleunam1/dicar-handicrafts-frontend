import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../../components";

const Row = styled.tr`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 10px;
  &:first-child {
    border-top: 1px solid #e8e8e8;
  }
`;
const Text = styled.p<{margin?:string}>`
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  max-width: 88%;
  text-align: left;
  margin-left: ${(props)=>props.margin || "0px"};
`;

const ContentRight = styled.td<{ background: string }>`
  height: 36px;
  width: 51%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  margin-right: 7px;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
  z-index: -1;
`;
const IconBox = styled.span`
  position: absolute;
  top: 25%;
  left: 0px;
`;
const ContentLeft = styled.td<{background: string}>`
  width: 12%;
  height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  margin-right: 7px;
  padding: 0px 4px 0px 4px;
  border-bottom: 1px solid #f6d1bc;
  &:last-child {
    margin-right: 0px;
  }
`;


const RowList: FC = () => {
  return (
      <Row>
        <ContentRight background="#fff">
          <IconBox>
            <Icon fill="fa-solid fa-heart" color="#ff6242" />
          </IconBox>
          <Text margin="45px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim commodi dolorem facilis cum dignissimos aliquid. Iure voluptatum culpa excepturi iusto!.</Text>
        </ContentRight>
        <ContentLeft background="#fff9f7">
          {" "}
          <Text>Lorem, ipsum dolor.</Text>
        </ContentLeft>
        <ContentLeft background="#fff3ee">
          {" "}
          <Text>Lorem, ipsum dolor.</Text>
        </ContentLeft>
        <ContentLeft background="#fff9f7">
          {" "}
          <Text>Lorem, ipsum dolor.</Text>
        </ContentLeft>
        <ContentLeft background="#fff3ee">
          {" "}
          <Text>
            <Icon fill="fa-regular fa-trash-can" hover="#ff0000" />
          </Text>
        </ContentLeft>
      </Row>
  );
};
export default RowList;
