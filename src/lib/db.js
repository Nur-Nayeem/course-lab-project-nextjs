import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "nextauth_db",
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Error:", err);
  }
};
