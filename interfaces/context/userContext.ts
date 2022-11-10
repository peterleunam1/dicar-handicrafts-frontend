import React from "react";

export interface IUser {
    document?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    phone_number?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface UserContextProviderProps{
    children: React.ReactNode
}

export interface AddressContextProps{
    update?: boolean,
    setUpdate: (value: boolean) => void

    address?: string
    setAddress: (value:string) =>void

    department?: string
    setDepartment: (value:string) =>void
    
    city?: string
    setCity: (value:string) =>void
}
