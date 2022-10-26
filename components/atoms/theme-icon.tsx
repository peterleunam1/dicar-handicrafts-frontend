import { FC } from "react"
import styled from "styled-components"
import { ThemeIconsProps } from "../../interfaces";

const Container = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
`;

const ThemeIcon:FC<ThemeIconsProps> = ({onClick, children}) => {

    return(
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}

export default ThemeIcon