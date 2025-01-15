// ** routes/users.mjs
// ** imports
import express from "express";
const router = express.Router();
import userController from "../controllers/users.mjs";

// this corresponds to regisiter on the frontend because register means add a new user
router.post("/", userController.create);

// this corresponds to login on the frontend
router.post("/login", userController.login);

// this corresponds to eidt user profile on the frontend
router.put("/:id", userController.editProfile);

// this corresponds to delete user pofile on the frontend
router.delete("/:id", userController.deleteProfile);

export default router;
