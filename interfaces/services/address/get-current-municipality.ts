export interface MunicipalityModel {
  data: { [key: string]: ReturnedMunicipality };
  message: string;
}

export interface ReturnedMunicipality {
  municipality: string;
}

export interface GetCurrentMunicipalityParams {
  department: string;
}