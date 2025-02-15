import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card/Card";
import type { VideoGamesI } from "./types/app";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [data, setData] = useState<VideoGamesI[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/video-games")
      .then((res) => res.json())
      .then((videoGames) => setData(videoGames));
  }, []);

  console.warn(data);

  return (
    <>
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Video-Game-Controller-Icon.svg/768px-Video-Game-Controller-Icon.svg.png"
          alt=""
        />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </nav>
      </header>

      <main id="app">
        <h1>Time to play the game</h1>
        {data.map((el) => (
          <Card key={el.name} name={el.name} image={el.image} />
        ))}
      </main>

      <ToastContainer />
    </>
  );
}

export default App;
