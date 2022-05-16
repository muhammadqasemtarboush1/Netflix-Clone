import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardActions, CardMedia } from "@mui/material";

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

function ModalMovie({ open, handleClose, movie }) {
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
        <CardActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            Close
          </Button>{" "}
          <Button onClick={handleClose} variant="contained" color="success">
            Save Changes
          </Button>
        </CardActions>
      </Box>
    </Modal>
  );
}

export default ModalMovie;
