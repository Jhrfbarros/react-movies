import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function MediaCard({ title, description }: CardProps) {
  return (
    <Box width="200px">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Detalhes</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
