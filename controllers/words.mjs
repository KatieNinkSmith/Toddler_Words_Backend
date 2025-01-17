import Words from "../models/words.mjs";
// import multer from "multer";
// const upload = multer({ dest: "uploads/" });

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
  console.log(req.params);
  try {
    const foundWords = await Words.find({ user: req.params.user });
    res.status(200).json(foundWords);
  } catch (err) {
    res.status(400).send(err);
  }
}

// get all words from a category for the user
async function findByCategory(req, res) {
  console.log(req.params, "find by category");
  try {
    const foundCategory = await Words.find({
      user: req.params.user,
      category: req.params.category,
    });
    // .all({ category: req.params.category,});
    res.status(200).json(foundCategory);
  } catch (err) {
    res.status(400).send(err);
  }
}

// allow user to create a word
async function createWord(req, res) {
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
}

// allow a user to edit their created word
async function editWord(req, res) {
  console.log(req.params, "url id");
  console.log(req.body, "why you forget");

  // Basic validation (optional, depending on your requirements)
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "No data provided for update" });
  }

  try {
    const updatedWord = await Words.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedWord);
  } catch (err) {
    res.status(400).send(err);
  }
}

// // allow user to delete their created word
// async function deleteWord(req, res) {
//   try {
//     const deletedWord = await Words.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedWord);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// }

export default {
  getWords,
  userWords,
  findByCategory,
  createWord,
  editWord,
  // deleteWord,
};
