import React from "react"

export interface AuthBoxProps {
    title: string
    arrow_s?: string
    arrow_a?: string
    box_display?: string
    children: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,

}