// ** routes/words.mjs
// ** imports
import express from "express";
const router = express.Router();
import wordsController from "../controllers/words.mjs";
// import multer from "multer";
// const upload = multer({ dest: "uploads/" });
import Words from "../models/words.mjs";

// this corresponds to get all user's words on the frontend
router.get("/", wordsController.getWords);

// this corresponds to get a user's word on the frontend
router.get("/:user", wordsController.userWords);

// this corresponds to user's word in a category
router.get("/:user/:category", wordsController.findByCategory);

// this corresponds to create a user's word on the frontend
router.post("/", wordsController.createWord);

// this corresponds to edit a user's word on the frontend
router.put("/:id", wordsController.editWord);

// this corresponds to delete a user's word on the frontend
router.delete("/:id", wordsController.deleteWord);

export default router;
