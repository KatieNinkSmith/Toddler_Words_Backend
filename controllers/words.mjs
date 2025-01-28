import Words from "../models/words.mjs";
// TODO: allows for file and blob upload still working on how to implement correctly
import path from "path";
import fs from "fs";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

// get all words
async function getWords(req, res) {
  try {
    const foundWords = await Words.find();
    res.status(200).json(foundWords);
  } catch (err) {
    res.status(400).send(err);
  }
}

// get words for one user
async function userWords(req, res) {
  try {
    const foundWords = await Words.find({ user: req.params.user });
    res.status(200).json(foundWords);
  } catch (err) {
    res.status(400).send(err);
  }
}

// get all words from a category for the user
async function findByCategory(req, res) {
  try {
    const foundCategory = await Words.find({
      user: req.params.user,
      category: req.params.category,
    });
    res.status(200).json(foundCategory);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Allow user to create a word
async function createWord(req, res) {
  // Create word and save to database
  const { word, category, audio, image, user } = req.body;
  try {
    const createdWord = new Words({
      word,
      category,
      image,
      audio,
      user,
    });

    await createdWord.save();
    res.status(200).json({ message: "Word and files uploaded successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
}

// allow a user to edit their created word
async function editWord(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "No data provided for update" });
  }
  console.log("Request body:", req.body);
  try {
    const updatedWord = await Words.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(updatedWord);
    res.status(200).json(updatedWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

// allow user to delete their created word
async function deleteWord(req, res) {
  try {
    const deletedWord = await Words.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default {
  getWords,
  userWords,
  findByCategory,
  createWord,
  editWord,
  deleteWord,
};
