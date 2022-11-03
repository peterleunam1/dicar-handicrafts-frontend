export interface SelectProps {
    array: string[]
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}