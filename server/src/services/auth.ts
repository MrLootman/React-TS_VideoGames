import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
require("dotenv").config();

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

const generateToken: RequestHandler = (req, res, next) => {
  try {
    const secretKey = process.env.APP_SECRET;

    if (!secretKey) {
      throw new Error("APP_SECRET environment variable is not set");
    }

    const token = jwt.sign({ email: req.body.email }, secretKey);

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "none",
        // secure: process.env.NODE_ENV === "production",
        maxAge: 36000,
      })
      .status(200)
      .json({ message: "Logged in successfully 😊 👌" });
  } catch (err) {
    console.error(err);
  }
};

export default { hashPassword, generateToken };
