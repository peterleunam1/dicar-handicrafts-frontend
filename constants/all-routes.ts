import { ApiRoutesModel, RoleApiModel } from "../interfaces";

export const BASE_URL: string =
  "https://dicard-handicraft-backend-withenv.onrender.com/api/v1/";

export const BASE_URL_DEPLOY: string =
  "https://dicar-handicrafts-frontend.vercel.app";

export const WHATSAPP_ROUTE: string =
  " https://api.whatsapp.com/send?phone=573008824913 &text=*¡Saludoos!%0AEstoy interesado en alguno de tus productos, estos son mis datos";

export const INTERRAPIDISIMO_ROUTE: string = "www.interrapidisimo.com";

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
