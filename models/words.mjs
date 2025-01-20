import mongoose from "mongoose";
const Schema = mongoose.Schema;

const wordsSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
        lowercase: true,
        message: "Category must be selected",
      },
    },
    word: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    imageURL: {
      type: String,
      default: null,
    },
    audio: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

wordsSchema.index({ category: 1, family: 1 });
wordsSchema.index({ category: 1, places: 1 });
wordsSchema.index({ category: 1, clothing: 1 });
wordsSchema.index({ category: 1, things: 1 });
wordsSchema.index({ user: 1, _id: 1 });

const Words = mongoose.model("Word", wordsSchema);

export default Words;
