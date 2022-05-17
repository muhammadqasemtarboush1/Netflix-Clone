import { CardActions } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Chip } from "@mui/material/";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";

function FavList() {
  const [favMovie, setFavMovie] = useState();

  async function getFavMovies() {
    let url = `${process.env.REACT_APP_URL}/getMovies`;
    let response = await fetch(url, {
      method: "GET",
    });
    let favfavMovies = await response.json();
    setFavMovie(favfavMovies);
  }

  async function handleDelete(id) {
    let url = `${process.env.REACT_APP_URL}/deleteMovie/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
    });
    if (response.status === 202) {
      getFavMovies();
      alert(" Movie deleted successfully");
    }
  }
  useEffect(() => {
    getFavMovies();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} m={2} p={10}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {favMovie && favMovie.length <= 0 && (
            <h2> Add new moive to your collection </h2>
          )}
          {favMovie &&
            favMovie.map((movie) => {
              return (
                <Grid item xs={12} md={4} key={movie.id}>
                  <Grid item>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={`https://image.tmdb.org/t/p/w300/${movie.posterpath}`}
                        alt="green iguana"
                      />

                      <CardContent>
                        <Chip
                          label={`Release date: ${movie.releasedate}`}
                          // color="success"
                          variant="outlined"
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {movie.overview}
                        </Typography>

                        <hr />
                        <br />
                        <MenuItem>
                          <ListItemIcon></ListItemIcon>
                          <ListItemText>
                            {movie.comments ? movie.comments : "No comments"}
                          </ListItemText>
                        </MenuItem>
                        {/* <Divider /> */}
                        {/* <Typography variant="body2" color="text.secondary">
                          {movie.comments ? movie.comments : "No comments"}
                        </Typography> */}
                      </CardContent>

                      <CardActions>
                        {/* <Button size="small">Add to Favorite</Button> */}
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(movie.id)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default FavList;
