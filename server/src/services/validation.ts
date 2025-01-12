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

export default { checkRegister, registerValidation };
