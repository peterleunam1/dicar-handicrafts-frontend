export interface SelectProps {
    array: any[]
    name?: string
    arg:string
    label: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}