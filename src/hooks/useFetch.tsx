import { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import axios from "axios";

type ReqStatus = "idle" | "fetching" | "success" | "error";

export default function useFetch<T>(config: AxiosRequestConfig, deps?: string) {
  const [status, setStatus] = useState<ReqStatus>("idle");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null | AxiosError>(null);
  const [refetchVar, setRefetchVar] = useState(0);
  console.log("config here", config);
  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      try {
        const response = await axios<T>(config);
        const data = response.data;
        setData(data);
        setStatus("success");
      } catch (error: unknown) {
        if (error instanceof Error || error instanceof AxiosError) {
          setError(error);
          setStatus("error");
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps, refetchVar]);

  const refetch = () => setRefetchVar((prev) => prev + 1);

  return { error, status, data, refetch };
}
