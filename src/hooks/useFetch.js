import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetch = (category) => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category)
      .then((newInfo) => setInfo(newInfo))
      .then(() => setIsLoading(false));
  }, [category]);

  return {
    info,
    isLoading,
  };
};
