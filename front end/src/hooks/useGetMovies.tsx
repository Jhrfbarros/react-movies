import { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "../components/card/cards";

export function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/movies")
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { movies, loading, error };
}
