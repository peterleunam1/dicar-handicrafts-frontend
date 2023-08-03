import { useState } from "react";
import { UseModalProps } from "../interfaces";

export default function useModal({ initialMode }: UseModalProps) {
  const [status, setStatus] = useState(initialMode);
  const toggle = () => setStatus(!status);

  return {
    status,
    toggle,
  };
}
