import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const read: RequestHandler = async (req, res) => {
  try {
    const videoGames = await userRepository.readAll();

    res.status(200).send(videoGames);
  } catch (err) {
    res.sendStatus(500);
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    console.warn(req.body);

    const result = await userRepository.create(req.body);

    if (result) {
      res.status(201).json("Your account has been created successfully");
    } else {
      res.status(404).json("This game doesn't exist");
    }
  } catch (err) {
    console.warn(err);
    res.status(500).json("Internal server error");
  }
};

export default { add, read };
