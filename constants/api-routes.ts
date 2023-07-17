import { ApiRoutesModel, RoleApiModel } from "../interfaces";

export const BASE_URL: string =
  "https://dicard-handicraft-backend-withenv.onrender.com/api/v1/";

const roleApi: RoleApiModel = {
  public: `${BASE_URL}public/`,
  private: `${BASE_URL}private/`,
};

export const apiRoutes: ApiRoutesModel = {
  public: {
    getMunicipalities: `${roleApi.public}cities/bydepartment/`,
    getDepartments: `${roleApi.public}states`,
    getProducts: `${roleApi.public}products/`,
  },
  private: {
    getOrders: `${roleApi.private}/orders`,
  },
};
