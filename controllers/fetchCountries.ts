import { Request, Response } from "express";
import { getAvailableCountries } from "../services/getAvailableCountry.js";
import { getCountryInfo } from "../services/getOneByCode.js";

export const fetchCountries = async (req: Request, res: Response) => {
  try {
    const countries = await getAvailableCountries();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch countries" });
  }
};
export const fetchCountryInfo = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    if (typeof code !== "string") {
      return res
        .status(400)
        .json({ error: "Country code is required and must be a string" });
    }
    const info = await getCountryInfo(code);
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch country info" });
  }
};
