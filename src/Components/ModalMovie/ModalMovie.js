import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardActions, CardMedia, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalMovie({ open, handleClose, movie, updateMovie }) {
  const [value, setValue] = useState("");

  function handleComment(e) {
    e.preventDefault();
    let newMoive = { ...movie, value };
    updateMovie(newMoive, newMoive.id);
  }

  async function handleAddToFav(e, movie) {
    e.preventDefault();

    let url = `${process.env.REACT_APP_URL}/addMovie`;
    let data = {
      title: movie.title,
      releaseDate: movie.release_date,
      overview: movie.overview.substring(0, 250),
      posterPath: movie.poster_path,
      comments: movie.comments,
    };
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      alert("Moive added to youe favorites ");
    }
    let newMoiveAdded = await response.json();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {movie.title}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="green iguana"
        />

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {movie.overview}
        </Typography>
        <br />
        <hr />

        <Typography variant="body1" color="initial">
          {movie.comments ? movie.comments : "No comments"}
        </Typography>

        <hr />
        <form onSubmit={handleComment}>
          <TextField
            // onChange={}
            name="comments"
            // value={value}
            label={"Comments"} //optional
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {/* <Button
            onClick={handleComment}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Add Comment
          </Button> */}
        </form>

        <CardActions>
          {/* <Button onClick={handleClose} variant="outlined" color="error">
            Close
          </Button>{" "} */}
          <Button
            onClick={(e) => {
              handleAddToFav(e, movie);
            }}
            variant="contained"
            color="success"
          >
            Add to Favorite
          </Button>
        </CardActions>
      </Box>
    </Modal>
  );
}

export default ModalMovie;
