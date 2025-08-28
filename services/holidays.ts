import mongoose, { Types } from "mongoose";
import axios from "axios";
import Calendar, { ICalendar } from "../models/Calendar.js";

interface HolidayAPIResponse {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
  launchYear: number | null;
  types: string[];
}

export const addHolidaysToCalendar = async (
  userId: string,
  countryCode: string,
  year: number,
  holidays?: string[],
): Promise<ICalendar> => {
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error(`Invalid userId: ${userId}`);
    }
    const objectUserId = new mongoose.Types.ObjectId(userId);

    const url = `${process.env.NAGER_API}/PublicHolidays/${year}/${countryCode}`;
    console.log("Fetching holidays from API:", url);
    const { data } = await axios.get<HolidayAPIResponse[]>(url);

    let selectedHolidays: string[] = data.map((h) => h.localName);
    if (holidays && holidays.length > 0) {
      const holidaySet = new Set(holidays.map((h) => h.toLowerCase()));
      selectedHolidays = selectedHolidays.filter((h) =>
        holidaySet.has(h.toLowerCase()),
      );
    }

    console.log("Selected holidays:", selectedHolidays);

    const calendar = new Calendar({
      userId: objectUserId,
      holidays: selectedHolidays,
    });

    console.log("Saving calendar...");
    await calendar.save();
    console.log("Calendar saved successfully");

    return calendar;
  } catch (error: any) {
    console.error("Error in addHolidaysToCalendar:", error);
    throw new Error(`Failed to add holidays: ${error}`);
  }
};
