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

wordsSchema.index({ category: 1, family: 1 });
wordsSchema.index({ category: 1, places: 1 });
wordsSchema.index({ category: 1, clothing: 1 });
wordsSchema.index({ category: 1, things: 1 });

const Words = mongoose.model("Words", wordsSchema); // Make sure the model name is "Words"

export default Words;
