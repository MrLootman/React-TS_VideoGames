import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res) => {
  try {
    const result = await userRepository.create(req.body);

    if (result) {
      res.status(201).json("Your account has been created successfully");
    } else {
      res.status(404).json("This game doesn't exist");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
};

export default { add };
