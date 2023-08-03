import { UpdateLocalStorageParams } from "../interfaces/helpers/update-local-storage.model";

export const updateLocalStorage = ({ state, key }: UpdateLocalStorageParams) => {
  localStorage.setItem(key, JSON.stringify(state));
};
