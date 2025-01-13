import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bcrypt from "bcrypt";

const SALT_ROUNDS = 6;

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

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
    // pin: {
    //   type: Number,
    //   minLength: 4,
    //   maxLength: 4,
    //   required: true,
    // },
    words: [wordsSchema],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  // "this" is the user doc
  if (!this.isModified("password")) return next();
  // if the password has changed, we need to update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

const Users = mongoose.model("User", userSchema);

export default Users;
