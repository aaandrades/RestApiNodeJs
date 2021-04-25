import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  img?: string;
  role?: string;
  state?: boolean;
  google?: string;
}
