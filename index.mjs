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
  res.send(
    "Welcome to Toddler Words API",
    "The end points for the WORDS are:,",
    "GET: https://toddler-words-backend.onrender.com/api/words",
    "This returns all created words in the database",
    "GET: https://toddler-words-backend.onrender.com/api/words/:userid",
    "This returns all the created words by a single user",
    "GET: https://toddler-words-backend.onrender.com/api/words/:userid/:category",
    "This returns all the created words in a specific category by a single user",
    "POST: https://toddler-words-backend.onrender.com/api/words",
    "This is the route to create a word the required body to send is;",
    "name: '', category: '', user: userId",
    "PUT: https://toddler-words-backend.onrender.com/api/words/:id",
    "This route is to edit a word the required body is;",
    "name: '', category: '', user: userId",
    "DELETE: https://toddler-words-backend.onrender.com/api/words/:id",
    "This route is to delete a word from the database The end points for the USERS are:",
    "POST: https://toddler-words-backend.onrender.com/api/users",
    "This is the route to create a new user required body is;",
    "name: '', email: '', password: ''",
    "POST: https://toddler-words-backend.onrender.com/api/users/login",
    "This is the route to log a user into the front end to display their created words required body is;",
    "email: '', password: ''"
  );
});

app.use("/api/users", users);
app.use("/api/words", words);

app.use((err, _req, res, next) => {
  res.status(500).send("There seems to be an error on the server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
