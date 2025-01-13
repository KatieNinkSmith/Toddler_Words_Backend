import express from "express";
import dotenv from "dotenv";
import logger from "morgan";

dotenv.config();

// import mongo connection
import db from "./db/conn.mjs";
// import cors for frontend to backend communication
import cors from "cors";

// TODO import routes
import users from "./routes/users.mjs";

// set up PORT
const PORT = process.env.PORT || 5000;

// creating app
const app = express();

// middleware
app.use(cors()); // *to ensure communication works
app.use(express.json()); // to parse json data

// TODO routes
app.get("/", (req, res) => {
  res.send("Welcome to Toddler Words API");
});

// TODO endpoint routes
app.use("/api/users", users);

// global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("There seems to be an error on the server");
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
