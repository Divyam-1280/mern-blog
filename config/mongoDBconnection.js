import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connecttoDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI)
    return console.log("MONGODB_URI is not defined");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connecttoDB;
