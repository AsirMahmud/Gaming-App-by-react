import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { genres, error, isLoading };
};
export default useGenres;
