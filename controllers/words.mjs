import Words from "../models/words.mjs";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

// get all words for the user
async function getWords(req, res) {
  try {
    const foundWords = await Words.find({});
    res.status(200).json(foundWords);
  } catch (err) {
    res.status(400).send(err);
  }
}

// get a single word for the user
async function getWord(req, res) {
  try {
    const foundWord = await Words.findById(req.params.id);
    res.status(200).json(foundWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

// get all words from a category for the user
async function category(req, res) {
  try {
    const foundCategory = await Words.find().all("category", [
      "family",
      "places",
      "things",
      "clothing",
    ]);
    res.status(200).json(foundCategory);
  } catch (err) {
    res.status(400).send(err);
  }
}

// allow user to create a word
async function createWord(req, res) {
  try {
    const createdWord = await Words.create(req.body);
    res.status(200).json(createdWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

// allow a user to edit their created word
async function editWord(req, res) {
  try {
    const updatedWord = await Words.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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
  getWord,
  category,
  createWord,
  editWord,
  deleteWord,
};
