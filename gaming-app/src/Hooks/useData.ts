import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  interface FetchResposne {
    count: number;
    results: T[];
  }
  useEffect(
    () => {
      setLoading(true);
      apiClient
        .get<FetchResposne>(endPoint, { ...requestConfig })
        .then((res) => setData(res.data.results))
        .catch((err) => {
          setError(err);
        })
        .finally(() => setLoading(false));
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};
export default useData;
