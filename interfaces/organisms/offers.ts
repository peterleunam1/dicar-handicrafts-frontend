import React from "react";
import { IProduct } from "../helpers/products";

export interface OffersProps {
    type: "image" | "video",
    urlMultimedia: string,
    children: React.ReactNode
}