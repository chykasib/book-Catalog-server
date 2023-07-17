import mongoose from "mongoose";
import config from "./index";
const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("database is connected successfully");
  } catch (err: unknown | [message?: string] | string | undefined) {
    console.log("failed to connect database", err);
  }
};

export { dbConnect };
