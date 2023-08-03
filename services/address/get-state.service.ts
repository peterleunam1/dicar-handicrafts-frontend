import { apiRoutes } from "../../constants";
import { DepartmentsModel } from "../../interfaces";

export async function getStates(): Promise<DepartmentsModel> {
  try {
    const response = await fetch(apiRoutes.public.getDepartments);
    if (!response.ok) throw new Error("Error al obtener los estados");

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error al obtener los estados");
  }
}
