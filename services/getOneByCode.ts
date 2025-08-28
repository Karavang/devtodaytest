import axios from "axios";

export const getCountryInfo = async (code: string) => {
  const [infoRes, populationRes, flagRes] = await Promise.all([
    axios.get(`${process.env.NAGER_API}/CountryInfo/${code}`),
    axios.get(`${process.env.COUNTRIESNOW_API}/countries/population`),
    axios.get(`${process.env.COUNTRIESNOW_API}/countries/flag/images`),
  ]);

  const countryInfo = infoRes.data;
  const populationData = populationRes.data.data.find(
    (c: any) => c.country === countryInfo.commonName,
  );
  const flagData = flagRes.data.data.find(
    (c: any) => c.name === countryInfo.commonName,
  );

  return {
    borders: countryInfo.borders,
    population: populationData ? populationData.populationCounts : [],
    flag: flagData ? flagData.flag : "",
  };
};
