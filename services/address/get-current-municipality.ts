import { apiRoutes } from "../../constants";
import {
  MunicipalityModel,
  GetCurrentMunicipalityParams,
} from "../../interfaces";



export async function getCurrentMunicipality({ department }: GetCurrentMunicipalityParams): Promise<MunicipalityModel> {
  try {
    const response = await fetch(
      `${apiRoutes.public.getMunicipalities + department}`
    );
    if (!response.ok) throw new Error("Error al obtener los municipios");

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error al obtener los municipios");
  }
}
