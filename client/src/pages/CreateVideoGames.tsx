import type { ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./CreateVideoGames.css";

function CreateVideoGames() {
  const notify = (msg: string) => toast.success(msg);

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (typeof data.name === "string") {
      notify(data.name);
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
          <input
            type="text"
            id="video-game-image"
            name="image"
            placeholder="Exemple : toto.png"
          />

          <button type="submit">Validez</button>
        </form>
      </main>
      <ToastContainer />
    </>
  );
}

export default CreateVideoGames;
