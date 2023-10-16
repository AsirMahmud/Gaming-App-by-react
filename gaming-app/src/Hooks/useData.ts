import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResposne {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<FetchResposne>(endPoint)
      .then((res) => setData(res.data.results))
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, error, isLoading };
};
export default useData;
