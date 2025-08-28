import { Request, Response } from "express";
import { addHolidaysToCalendar } from "../services/holidays.js";

export const addHolidays = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const { countryCode, year, holidays } = req.body;
    if (typeof userId !== "string") {
      return res
        .status(400)
        .json({ error: "User ID is required and must be a string" });
    }
    const result = await addHolidaysToCalendar(
      userId,
      countryCode,
      year,
      holidays,
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: `Failed to add holidays: ${error}` });
  }
};
