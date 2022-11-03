export interface InputProps {
    type: string;
    placeholder: string;
    name: string
    px?: string
    py?: string
    fSize?: string
    border_color?: string
    mb?: string
    bradius?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}