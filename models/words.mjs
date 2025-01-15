import mongoose from "mongoose";
const Schema = mongoose.Schema;

const wordsSchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: {
      values: [
        "colors",
        "animals",
        "counting",
        "food",
        "family",
        "places",
        "things",
        "clothing",
      ],
      message: "Category must be selected",
    },
  },
  word: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
});

const Words = mongoose.model("Word", wordsSchema);

export default Words;
