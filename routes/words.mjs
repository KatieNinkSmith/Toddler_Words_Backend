// ** routes/words.mjs
// ** imports
import express from "express";
const router = express.Router();
import userController from "../controllers/words.mjs";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import Words from "../models/words.mjs";

// // this corresponds to get all user's words on the frontend
// router.get("/:id/words", userController.getWords);

// // this corresponds to get a user's word on the frontend
// router.get("/:id/:word", userController.getWord);

// // this corresponds to a category of user's words on the frontend
// router.get("/:id/words/:category", userController.category);

// this corresponds to create a user's word in the front end
// router.post("/upload", userController.createWord);
router.post("/", async (req, res) => {
  try {
    console.log(req.body, "sent");
    // const { word, category, user } = req.body; // Form data
    // console.log(req.body.word, req.body.category, req.body.user, "sent info");
    const createdWord = new Words(req.body);
    console.log(createdWord, "next step");
    createdWord.save();
    console.log(createdWord, "new");
    res.status(200).json({ message: "Word and files uploaded successfully" });
  } catch (err) {
    console.log("its not adding");
    res.status(400).send(err);
  }
});

// // this corresponds to edit a user's word on the frontend
// router.put("/:id/:word", userController.editWord);

// // this corresponds to delete a user's word on the frontend
// router.delete("/:id/:word", userController.deleteWord);

export default router;
