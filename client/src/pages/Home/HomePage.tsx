import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

function HomePage() {
  const [data, setData] = useState<VideoGamesI[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/video-games")
      .then((res) => res.json())
      .then((videoGames) => setData(videoGames));
  }, []);

  return (
    <main id="app">
      {data.map((el) => (
        <Card key={el.name} name={el.name} image={el.image} />
      ))}
    </main>
  );
}

export default HomePage;
