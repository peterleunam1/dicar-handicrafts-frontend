export interface CheckoutFormProps {
  handleClick: () => void;
  data: Record<string, string>;
  setData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export interface AddressCheckoutModel {
  [key: string]: string;
}
