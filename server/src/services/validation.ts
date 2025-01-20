import argon2 from "argon2";
import type { RequestHandler } from "express";
import { body, validationResult } from "express-validator";
import userRepository from "../modules/user/userRepository";

const checkRegister = [
  body("email", "This email should'nt be empty").not().isEmpty(),
  body("email", "This email is not valid").isEmail().normalizeEmail(),
  body("email").custom((value) => {
    return userRepository.findIfEmailExists(value).then((user) => {
      if (user.length) {
        return Promise.reject("E-mail already in use");
      }
    });
  }),
  body("password", "The minimum password length is 8 characters").isLength({
    min: 8,
  }),
];

const registerValidation: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  res.status(422).json({ errors: errors.array() });
};

const checkPerson: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const checkEmail = await userRepository.findIfEmailExists(email);

    if (checkEmail) {
      req.body.hashedPassword = checkEmail[0].password;
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.error(err);
  }
};

const checkPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password, hashedPassword } = req.body;
    if (await argon2.verify(hashedPassword, password)) {
      req.body.password = "";

      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.warn(err);
  }
};

export default {
  checkRegister,
  checkPerson,
  checkPassword,
  registerValidation,
};
