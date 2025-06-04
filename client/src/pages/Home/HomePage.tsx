import { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../../components/Card/Card";

function HomePage() {
  const [data, setData] = useState<VideoGamesI[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/video-games")
      .then((res) => res.json())
      .then((videoGames) => setData(videoGames));
  }, []);

  return (
    <main className="app">
      {data.map((el) => (
        <Link key={el.id} to={`/detail/${el.id}`}>
          <Card name={el.name} image={el.image} />
        </Link>
      ))}
    </main>
  );
}

export default HomePage;
