import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
interface Game {
  id: number;
  name: string;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {games.map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
