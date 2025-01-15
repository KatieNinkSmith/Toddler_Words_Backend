// ** routes/words.mjs
// ** imports
import express from "express";
const router = express.Router();
import userController from "../controllers/words.mjs";

// this corresponds to get all user's words on the frontend
router.get("/:id/words", userController.getWords);

// this corresponds to get a user's word on the frontend
router.get("/:id/:word", userController.getWord);

// this corresponds to a category of user's words on the frontend
router.get("/:id/:category", userController.category);

// this corresponds to create a user's word in the front end
router.post("/:id", userController.createWord);

// this corresponds to edit a user's word on the frontend
router.put("/:id/:word", userController.editWord);

// this corresponds to delete a user's word on the frontend
router.delete("/:id/:word", userController.deleteWord);

export default router;
