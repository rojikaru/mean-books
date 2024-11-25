import mongoose from "mongoose";

const connStr = process.env.MONGO_URI ?? "mongodb://localhost:27017/books";
if (!connStr) {
  console.error("Mongo URI is required");
  process.exit(1);
}

const dbClient = await mongoose.connect(connStr);
export default dbClient;
