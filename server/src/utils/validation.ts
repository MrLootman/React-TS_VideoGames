import type { RequestHandler } from "express";

const userValidation: RequestHandler = (req, res, next) => {
  try {
    const { email, password } = req.body;
    const isEmailValid = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (!email || !password) {
      res.status(400).json("Fields cannot be null");
    } else if (!isEmailValid) {
      res.status(400).json("This is not an email");
    } else {
      next();
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { userValidation };
