import axios from "axios";

export const getAvailableCountries = async () => {
  const url = `${process.env.NAGER_API}/AvailableCountries`;
  const { data } = await axios.get(url);
  return data;
};
