import { ReturnedMunicipality } from "../services";
import { returnedDepartments } from "../services/address/get-state";

export interface CheckoutFormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClick: () => void;
  states: returnedDepartments[];
  cities: ReturnedMunicipality;
  error: string;
}

export interface AddressCheckoutModel {
  [key: string]: string;
}
