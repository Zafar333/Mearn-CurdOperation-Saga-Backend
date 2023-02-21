import mongoose from "mongoose";

const Database = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URL, () => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log("error in database connection", error.message);
  }
};

export default Database;
