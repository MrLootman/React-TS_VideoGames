// import type { ChangeEvent } from "react";
import "./CreateVideoGames.css";

function CreateVideoGames() {
  // function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());
  // }

  return (
    <main id="create">
      <form>
        <label htmlFor="name">Nom de votre jeu vidéo</label>
        <input
          type="text"
          id="video-game-name"
          name="name"
          placeholder="Exemple : Diablo III"
        />

        <label htmlFor="image">Nom de votre jeu vidéo</label>
        <input
          type="text"
          id="video-game-image"
          name="image"
          placeholder="Exemple : toto.png"
        />

        <button type="submit">Validez</button>
      </form>
    </main>
  );
}

export default CreateVideoGames;
