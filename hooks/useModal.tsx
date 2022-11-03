import { useState } from "react";

const useModal = () => {
  const [status, setStatus] = useState(false);

  return {
    status,
    setStatus,
  };
};

export default useModal;
