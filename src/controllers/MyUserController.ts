import { Request, Response } from "express";
import User from "../models/user";

//req = request, res = response
const createCurrentUser = async (req: Request, res: Response) => {
  //check if user exists *
  //create user if it doesn't exist *
  //return user object to frontend *

  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    //converts the user object to a plain object
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export default { createCurrentUser };
