import React from "react";

export interface ButtonProps{
    text?: string
    bg: string
    width?: string
    hover: string
    color?: string
    border?: string
    mb?: string
    mt?: string
    children?: React.ReactNode
    onClick: () => void
}