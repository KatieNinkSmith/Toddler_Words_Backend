// ** routes/users.mjs
// ** imports
import express from "express";
const router = express.Router();
import userController from "../controllers/users.mjs";

// this corresponds to regisiter on the frontend because register means add a new user
router.post("/", userController.create);

// this corresponds to login on the frontend
router.post("/login", userController.login);

export default router;
