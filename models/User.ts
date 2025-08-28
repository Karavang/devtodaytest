import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
});

export default mongoose.model<IUser>("User", UserSchema);
