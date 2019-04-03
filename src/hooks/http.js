import { useState, useEffect } from "react";
import configuration from "../config";

// the url is /home for example
const useHttp = url => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${configuration.apiPath}${url}`);
      setFetchedData(await response.json());
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [url]);

  return [fetchedData, isLoading, error];
};

export default useHttp;
