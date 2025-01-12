import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.readAll();

    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const createUser = await userRepository.add(req.body);

    if (createUser) {
      res.sendStatus(204);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add };
