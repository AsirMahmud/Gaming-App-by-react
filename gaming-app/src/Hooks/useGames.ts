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
      .get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { games, error };
};

export default useGames;
