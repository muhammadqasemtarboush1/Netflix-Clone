import React from "react";
import { Grid } from "@mui/material";
import Movie from "../Movie/Movie";
function MovieList({ data }) {
  return (
    <Grid item xs={12} className="main">
      <Grid container justifyContent="center" spacing={2}>
        {data.map((movie, i) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </Grid>
    </Grid>
  );
}

export default MovieList;
