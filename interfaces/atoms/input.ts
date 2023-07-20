import { RegexsModel } from "../constants/regexs";

export interface InputProps {
    type: string;
    placeholder?: string;
    name?: string
    border_color?: string
    mb?: string
    bradius?: string
    value?: any
    label?:string
    regexs?: RegexsModel
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}