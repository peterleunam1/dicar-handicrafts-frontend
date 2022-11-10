import useSWR from "swr";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

const getCitiesByState = (state: string) => {
  const { data, error } = useSWR(
    `https://dicard-handicraft.herokuapp.com/api/v1/public/cities/bydepartment/${state}`,
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
