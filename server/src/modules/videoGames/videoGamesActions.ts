import type { RequestHandler } from "express";

const arrayOfVideoGames = [
  {
    id: 1,
    name: "Diablo III",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png",
  },
  {
    id: 2,
    name: "The Binding of Isaac",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fa/Binding_of_isaac_header.jpg",
  },
];

const browse: RequestHandler = (req, res) => {
  res.json(arrayOfVideoGames);
};

export default { browse };
