import React from "react";

export interface AlertProps {
    message: string
    type: "success" | "error"
    visibility:string
}