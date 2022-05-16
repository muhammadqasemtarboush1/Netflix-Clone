import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MovieList from "../MovieList/MovieList";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
function Home() {
  const [data, setData] = useState([]);
  async function fetchData() {
    // let url = "https://moivesdb.herokuapp.com";
    let url = process.env.REACT_APP_URL;
    let resData = await fetch(`${url}/trending`);
    let mData = await resData.json();
    setData(mData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Grid sx={{ flexGrow: 1 }} container spacing={2} className="main">
        {data.length > 0 && <MovieList data={data} />}
      </Grid>
    </>
  );
}

export default Home;
