import mongoose from "mongoose";

export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected " + mongoose.version);
  } catch (error) {
    console.log("Error: Failed to connect to database");
  }
};
