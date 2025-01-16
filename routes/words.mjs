// ** routes/words.mjs
// ** imports
import express from "express";
const router = express.Router();
import userController from "../controllers/words.mjs";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

// // this corresponds to get all user's words on the frontend
// router.get("/:id/words", userController.getWords);

// // this corresponds to get a user's word on the frontend
// router.get("/:id/:word", userController.getWord);

// // this corresponds to a category of user's words on the frontend
// router.get("/:id/words/:category", userController.category);

// this corresponds to create a user's word in the front end
// router.post("/upload", userController.createWord);
router.post(
  "/upload",
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  (req, res) => {
    const { word, category, userId } = req.body;
    const audioFile = req.files.audio[0]; // Access the uploaded audio file
    const imageFile = req.files.image[0]; // Access the uploaded image file

    // Process the data here (e.g., save it to a database)
    console.log("Received word:", word);
    console.log("Received category:", category);
    console.log("Received userId:", userId);
    console.log("Received audio file:", audioFile);
    console.log("Received image file:", imageFile);

    // Respond to the client
    res.status(200).json({ message: "Word saved successfully" });
  }
);

// // this corresponds to edit a user's word on the frontend
// router.put("/:id/:word", userController.editWord);

// // this corresponds to delete a user's word on the frontend
// router.delete("/:id/:word", userController.deleteWord);

export default router;
