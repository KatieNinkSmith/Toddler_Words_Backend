import mongoose from "mongoose";
const Schema = mongoose.Schema;

const wordsSchema = new Schema({
  words: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "_id",
  },
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
  },
  audio: {
    type: String,
  },
});

wordsSchema.index({ category: 1, family: 1 });
wordsSchema.index({ category: 1, places: 1 });
wordsSchema.index({ category: 1, clothing: 1 });
wordsSchema.index({ category: 1, things: 1 });

const Words = mongoose.model("Words", wordsSchema); // Make sure the model name is "Words"

export default Words;
