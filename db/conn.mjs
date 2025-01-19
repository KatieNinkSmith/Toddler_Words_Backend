import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.ATLAS_URI;
const db = mongoose.connection;

mongoose.connect(mongoURL);
mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

export default db;
