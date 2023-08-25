import { Box } from "@mui/material";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Introduction from "./components/introduction/introduction";
import Title from "./components/title/title";
import TitleCard from "./components/titlecard/titlecard";
import MediaCard from "./components/card/cards";
import { useGetMovies } from "./hooks/useGetMovies";

export default function App() {
  const { movies, loading, error } = useGetMovies();

  if (error) {
    return <p>Erro! estamos em manutenção</p>;
  }

  return (
    <Box display="flex" flex={1} justifyContent="center">
      <Box maxWidth="1200px">
        <Title />
        <Introduction />
        <TitleCard />
        <Box display="flex" gap={2}>
          {!loading &&
            movies.map(({ title, description }) => (
              <MediaCard title={title} description={description} />
            ))}
          {!loading && movies.length === 0 && (
            <p>Não existem filmes cadastrados</p>
          )}
          {loading && <p>Carregando...</p>}
        </Box>
      </Box>
    </Box>
  );
}
