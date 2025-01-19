import User from "../models/users.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// allows user to create an account
async function create(req, res) {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const createdUser = await User.create({
      ...req.body,
    });
    console.log(createdUser);
    const token = createJWT(createdUser);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    const userPassword = user.password;
    if (!user) throw new Error("User not found");
    const match = await bcrypt.compare(req.body.password, userPassword);
    if (!match) throw new Error("Invalid password");
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

// TODO
// allows user to edit their profile
async function editProfile(req, res) {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
}

// TODO
// allows user to delete their account and associated data
async function deleteProfile(req, res) {
  try {
    const deletedUser = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).send(err);
  }
}

// function to create JTW for users
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

export default { create, createJWT, login, editProfile, deleteProfile };
