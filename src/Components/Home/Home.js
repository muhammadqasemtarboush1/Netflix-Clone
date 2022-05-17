import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MovieList from "../MovieList/MovieList";
import "./Home.css";
function Home() {
  const [data, setData] = useState([]);
  async function fetchData() {
    let url = process.env.REACT_APP_URL;
    let resData = await fetch(`${url}/trending`);
    let mData = await resData.json();
    setData(mData);
  }

  const updateMovie = (newMovie, id) => {
    let updatedMovie = data.map((newUpMovie) => {
      if (newUpMovie.id === id) {
        newUpMovie.comments = newMovie.value;
        return newUpMovie;
      } else {
        return newUpMovie;
      }
    });
    setData(updatedMovie);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={2} className="main">
        {data.length > 0 && <MovieList data={data} updateMovie={updateMovie} />}
      </Grid>
    </>
  );
}

export default Home;
