import React from "react";
import { Grid } from "@mui/material";
import Movie from "../Movie/Movie";
function MovieList({ data, updateMovie }) {
  return (
    <Grid item xs={12} className="main">
      <Grid container justifyContent="center" spacing={2}>
        {data.map((movie, i) => {
          return (
            <Movie key={movie.id} movie={movie} updateMovie={updateMovie} />
          );
        })}
      </Grid>
    </Grid>
  );
}

export default MovieList;
