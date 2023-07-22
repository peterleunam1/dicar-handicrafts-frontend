export interface MunicipalityModel {
  data: ReturnedMunicipality ;
  message: string;
}

export interface ReturnedMunicipality {
  municipality: string;
}

export interface GetCurrentMunicipalityParams {
  department: string;
}