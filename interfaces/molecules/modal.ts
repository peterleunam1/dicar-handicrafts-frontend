import React from "react";

export interface ModalProps {
    children: React.ReactNode    
    width?: string,
    height?: string,
    status: boolean,
    setStatus: (value:boolean) => void,
}