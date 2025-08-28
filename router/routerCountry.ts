import { Router } from "express";
import {
  fetchCountries,
  fetchCountryInfo,
} from "../controllers/fetchCountries.js";

const routerCountry = Router();

routerCountry.get("/", fetchCountries);
routerCountry.get("/:code", fetchCountryInfo);

export default routerCountry;
