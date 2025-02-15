import type { ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./CreateVideoGames.css";

function CreateVideoGames() {
  const notify = (msg: string) => toast.success(msg);

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch(
      "http://localhost:3310/api/video-games/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    if (response.ok) {
      notify("Tu as réussi à créer un jeu !");
    }
  }

  return (
    <>
      <main id="create">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom de votre jeu vidéo</label>
          <input
            type="text"
            id="video-game-name"
            name="name"
            placeholder="Exemple : Diablo III"
          />

          <label htmlFor="image">Image</label>
          <input type="file" name="file" />

          <button type="submit">Validez</button>
        </form>
      </main>
      <ToastContainer />
    </>
  );
}

export default CreateVideoGames;
