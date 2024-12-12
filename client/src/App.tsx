import { useEffect, useState } from "react";
import "./App.css";

interface VideoGamesI {
  id: number;
  name: string;
  image: string;
}

function App() {
  const [data, setData] = useState<VideoGamesI[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/video-games")
      .then((res) => res.json())
      .then((videoGames) => setData(videoGames));
  }, []);

  return (
    <>
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Video-Game-Controller-Icon.svg/768px-Video-Game-Controller-Icon.svg.png"
          alt=""
        />
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main id="app">
        {data.map((el) => (
          <section key={el.id}>
            <p>{el.name}</p>
            <img src={el.image} alt={el.name} />
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
