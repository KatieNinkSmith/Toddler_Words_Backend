import express from "express";
import dotenv from "dotenv";
import logger from "morgan"; // !

dotenv.config();

import db from "./db/conn.mjs";
import cors from "cors";
import users from "./routes/users.mjs";
import words from "./routes/words.mjs"; //!

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors()); // *to ensure communication works
app.use(express.json()); // to parse json data

app.get("/", (req, res) => {
  res.send("Welcome to Toddler Words API");
});

app.use("/api/users", users);
app.use("/api/words", words);

app.use((err, _req, res, next) => {
  res.status(500).send("There seems to be an error on the server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
