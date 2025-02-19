import type { VideoGamesI } from "../../types/app";
import "./Card.css";

function Card({ name, image }: VideoGamesI) {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      <img
        src={
          image.startsWith("/assets")
            ? `${import.meta.env.VITE_API_URL}${image}`
            : image
        }
        alt={`Video game named ${name}`}
      />
    </figure>
  );
}

export default Card;
