import type { ChangeEvent } from "react";
import "./CreateVideoGame.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function CreateVideoGame() {
  const navigate = useNavigate();

  const notify = () => toast.success("The video game has been created !");
  const error = () => toast.error("C'est nul !");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/video-game`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          notify();

          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          error();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <main className="create-video-game">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image" />

        <button type="submit">Valider</button>
      </form>

      <ToastContainer />
    </main>
  );
}

export default CreateVideoGame;
