import { useEffect, useState } from "react";
import { getStates } from "../services/address/get-state.service";
import { DepartmentsModel } from "../interfaces";

export default function useDepartments() {
  const [departments, setDepartments] = useState<DepartmentsModel>();
  const [error, setError] = useState<string>("");

  const getDepartments = async () => {
    try {
      const response = await getStates();
      return response;
    } catch (error: unknown) {
      setError("An error has ocurred!");
    }
  };

  useEffect(() => {
    getDepartments().then((response) => {
      if (!response) {
        setError("Departments not found!");
      } else {
        setDepartments(response);
      }
    });
  }, []);

  return {
    departments: departments?.data,
    error,
  };
}
