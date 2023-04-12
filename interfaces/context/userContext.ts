import React from "react";

export interface IUser {
    document?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    phone_number?: string;
    rol_id?: number
    createdAt?: string;
    updatedAt?: string;
}

export interface UserContextProviderProps{
    children: React.ReactNode
}

