import "./Creation.css";

function Creation() {
  return (
    <main className="creation">
      <form>
        <label htmlFor="name">Name of the video game</label>
        <input id="name" name="name" placeholder="Exemple: Binding of Isaac" />

        <label htmlFor="image">Name of the video game</label>
        <input id="image" name="image" placeholder="Exemple: isaac_image.png" />

        <button type="submit">Valider</button>
      </form>
    </main>
  );
}

export default Creation;
