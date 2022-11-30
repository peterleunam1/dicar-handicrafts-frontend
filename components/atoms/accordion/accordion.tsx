import { FC, useState } from "react";
import styled from "styled-components";
import { AccordionProps } from "../../../interfaces";
import Icon from "../icon/icon";

const AcordeonContent = styled.section<{
  overflow: boolean;
  maxheight: string;
  border: string;
}>`
  width: 100%;
  max-height: ${(props) => props.maxheight};
  border-bottom: 1px solid ${(props) => props.border};
  padding: 2px 2px 4px 2px;
  transition: 0.3s ease max-height;
  overflow-y: ${(props) => (props.overflow ? "visible" : "hidden")};

  div {
    margin: 25px 0px 0px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const Title = styled.p`
  height: 20px;
  border-left: 3px solid #f6d1bc;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-left: 11px;
  margin-top: 10px;
`;

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AcordeonContent
      overflow={isOpen}
      maxheight={isOpen ? "1000px" : "40px"}
      border={isOpen ? "none" : "#e8e8e8"}
    >
      <Title
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
        <Icon fill="fa-solid fa-angle-down" />
      </Title>
      <div>{children}</div>
    </AcordeonContent>
  );
};

export default Accordion;
