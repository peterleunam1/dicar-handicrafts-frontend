import { ReturnedMunicipality } from "../services";
import { returnedDepartments } from "../services/address/get-state";

export interface CheckoutFormProps {
  handleClick: () => void;
  data: Record<string, string>
  setData: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

export interface AddressCheckoutModel {
  [key: string]: string;
}
