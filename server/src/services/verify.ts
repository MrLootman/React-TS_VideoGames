import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const checkFields: RequestHandler = (req, res, next) => {
  const { name, image } = req.body;

  if (!name || !image) {
    res.sendStatus(403);
  } else {
    next();
  }
};

const checkAuth: RequestHandler = (req, res, next) => {
  try {
    // const token = req.cookies.access_token;
    console.warn("C'est quoi mon token ?? ", req.cookies);

    // if (!token) {
    //   res.status(401).json({ authenticated: false });
    // }

    const secretKey = process.env.secretKey;

    if (!secretKey) {
      throw new Error("The secretKey must be provided");
    }

    // const decoded = jwt.verify(token, secretKey);

    // if (decoded) next();
  } catch (err) {
    res.status(401).json({ authenticated: false });
  }
};

export default { checkFields, checkAuth };
