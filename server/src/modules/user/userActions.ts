import type { RequestHandler } from "express";
import userRepository from "./userRepository";

import argon2 from "argon2";

const browse: RequestHandler = async (req, res) => {
  const users = await userRepository.readAll();

  res.json(users);
};

const add: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const addUser = await userRepository.create(email, password);

    if (addUser) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

const hashPassword: RequestHandler = async (req, res, next) => {
  const hashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 17,
    hashLength: 50,
    parallelism: 1,
    iteration: 2,
  };

  try {
    const { password } = req.body;

    const hash = await argon2.hash(password, hashOptions);

    if (hash) {
      req.body.password = hash;
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add, hashPassword };
