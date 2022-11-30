import useSWR from "swr";
import { BASE_URL, sortArray } from "../../helpers";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

const getState = () => {
  const { data, error } = useSWR(
    `${BASE_URL}/public/states`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { data: states } = data;
  return {
    states: sortArray(states, "departamento"),
  };
};
export default getState;

