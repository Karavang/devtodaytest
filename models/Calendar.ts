import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICalendar extends Document {
  userId: Types.ObjectId;
  holidays: string[];
  createdAt: Date;
}

const CalendarSchema = new Schema<ICalendar>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  holidays: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ICalendar>("Calendar", CalendarSchema);
