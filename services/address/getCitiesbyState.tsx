import useSWR from "swr";
import { BASE_URL } from "../../helpers";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

const getCitiesByState = (state: string) => {
  const { data, error } = useSWR(
    `${BASE_URL}/public/cities/bydepartment/${state}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const cities = Object.entries(data.data);

  return {
    cities: cities,
  };
};
export default getCitiesByState;
