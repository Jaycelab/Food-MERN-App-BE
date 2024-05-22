import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// if router is a post request, it will call the createCurrentUser function from MyUserController
//createCurrentUser is a function that will check if the user exists, create user if it doesn't exist, and return user object to frontend (located in MyUserController.ts)
router.post("/", MyUserController.createCurrentUser);

export default router;
