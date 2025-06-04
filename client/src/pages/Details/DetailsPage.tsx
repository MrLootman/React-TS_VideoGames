import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card/Card";

function DetailsPage() {
  const [videoGame, setVideoGame] = useState<null | VideoGamesI>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/video-games/${id}`)
      .then((res) => res.json())
      .then((data) => setVideoGame(data));
  }, [id]);

  return (
    videoGame && (
      <main className="app">
        <Card {...videoGame} />
      </main>
    )
  );
}

export default DetailsPage;
