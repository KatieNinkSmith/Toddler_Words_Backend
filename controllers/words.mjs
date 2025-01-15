import Words from "../models/words.mjs";

async function getWords() {
  try {
    const foundWords = await Words.find({});
    res.status(200).json(foundWords);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getWord() {
  try {
    const foundWord = await Words.findById(req.params.id);
    res.status(200).json(foundWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function category() {
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

async function createWord() {
  try {
    const createdWord = await Words.create(req.body);
    res.status(200).json(createdWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function editWord() {
  try {
    const updatedWord = await Words.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteWord() {
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
