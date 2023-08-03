import { UpdateLocalStorageParams } from "../interfaces/utils/update-local-storage.model";

export const updateLocalStorage = ({ state, key }: UpdateLocalStorageParams) => {
  localStorage.setItem(key, JSON.stringify(state));
};
