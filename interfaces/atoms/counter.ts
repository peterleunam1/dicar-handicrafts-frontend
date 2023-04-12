export interface CounterProps {
    id?: any;
    onAction?: (value: number) => void
    qty?: any;
    counter: number;
    setCounter: (value: number) => void;
}