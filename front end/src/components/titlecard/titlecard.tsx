import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TitleCard() {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Melhores Filmes
      </Typography>
    </Box>
  );
}
