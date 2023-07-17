import { useCallback, useEffect, useState } from "react";
import { GetCurrentMunicipalityParams, MunicipalityModel } from "../interfaces";
import { getCurrentMunicipality } from "../services/address/get-current-municipality";

export default function useMunicipalities({ department }: GetCurrentMunicipalityParams) {

  const [municipalities, setMunicipalities] = useState<MunicipalityModel>();
  const [error, setError] = useState<string>("");

  const getMunicipalities = useCallback(async () => {
    try {
      const response = await getCurrentMunicipality({ department });
      return response;
    } catch (error: unknown) {
      setError("An error has ocurred!");
    }
  }, [department]);


  useEffect(() => {
    setError('');

    if (!department) {
      setError("Please select a department!");
    }

    getMunicipalities().then((response) => {
      if (!response) {
        setError("Municipalities not found!");
      } else {
        setMunicipalities(response);
      }
    });
  }, [department, getMunicipalities]);

  return {
    municipalities: municipalities?.data,
    error,
  };
}
