export interface CartContextProviderProps{
    children: React.ReactNode
}

export interface CartContextProps{
    update?: boolean,
    setUpdate: (value: boolean) => void
}
