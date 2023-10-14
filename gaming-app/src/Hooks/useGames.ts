import { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/api-client";
interface Game {
  id: number;
  name: string;
}

interface FetchGames {
  count: number;
  results: Game[];
}
const useGames = () => {
  const controller = new AbortController();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
