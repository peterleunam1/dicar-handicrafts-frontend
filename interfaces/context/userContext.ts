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

export interface UserContextProps{
    user?: IUser[],
    setUser: (value: IUser[]) => void
}