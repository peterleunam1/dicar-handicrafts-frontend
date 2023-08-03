export interface RoleApiModel {
  public: string;
  private: string;
}

export interface ApiRoutesModel {
  public: Public;
  private: Private;
}


interface Public {
  getMunicipalities: string;
  getDepartments: string;
  getProducts: string;
}

interface Private {
  getOrders: string;
}
