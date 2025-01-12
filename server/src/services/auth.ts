import type { RequestHandler } from "express";

const argon2 = require("argon2");

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hash = await argon2.hash(password);

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

export default { hashPassword };
