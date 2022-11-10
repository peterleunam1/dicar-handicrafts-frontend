import useSWR from "swr";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

const getState = () => {
  const { data, error } = useSWR(
    "https://dicard-handicraft.herokuapp.com/api/v1/public/states",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const { data: states } = data;
  return {
    states,
  };
};
export default getState;
