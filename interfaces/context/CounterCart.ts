import React from "react"

export interface CounterCart {
    counter: number,
    setCounter: (value: number) => void
}
export interface CounterCartProviderProps {
    children: React.ReactNode
}