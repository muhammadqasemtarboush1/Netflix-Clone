import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";

function Movie({ movie }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Add to Favorite</Button> */}
            <Button size="small" onClick={handleOpen}>
              Add to Favorite
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {movie && (
        <ModalMovie open={open} handleClose={handleClose} movie={movie} />
      )}
    </>
  );
}

export default Movie;
