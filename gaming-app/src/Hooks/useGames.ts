import { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}
const useGames = () => {
  const controller = new AbortController();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { games, error, isLoading };
};

export default useGames;
