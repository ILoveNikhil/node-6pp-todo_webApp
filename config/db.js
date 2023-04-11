import mongoose from "mongoose";

// db config
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "ToDo_6pp",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
