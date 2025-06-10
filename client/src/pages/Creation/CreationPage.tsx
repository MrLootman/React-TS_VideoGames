import { toast } from "react-toastify";
import "./CreationPage.css";

function CreationPage() {
  const success = () =>
    toast.success("Bravo, vous avez réussi à créer un nouveau jeu 🎉");
  const error = () => toast.error("Râté 😩");

  const handleSubmit = (data: FormData) => {
    const formData = JSON.stringify(Object.fromEntries(data));

    fetch("http://localhost:3310/api/video-games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    }).then((res) => (res.ok ? success() : error()));
  };

  return (
    <main className="creation">
      <form action={handleSubmit}>
        <label htmlFor="name">Name of the video game</label>
        <input id="name" name="name" placeholder="Exemple: Binding of Isaac" />

        <label htmlFor="image">Image of video game</label>
        <input id="image" name="image" placeholder="Exemple: isaac_image.png" />

        <button type="submit">Valider</button>
      </form>
    </main>
  );
}

export default CreationPage;
