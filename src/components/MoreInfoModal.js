import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import Facebook from "static/images/icon-facebook.svg";
import useStyles from "./styles";

const boxStyle = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: "4px",
  textAlign: "center",
  color: "black"
};

function MoreInfoModal({ isOpen, onClose, src }) {
  const classes = useStyles();
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Typography id="modal-modal-title" variant="body1" component="body1">
          See more information of this event on our fanpage:
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className={classes.mimButton}
          >
            <img
              src={Facebook}
              alt="facebook"
              className={classes.mimFacebook}
            />
            <span>Facebook</span>
          </a>
        </Typography>
      </Box>
    </Modal>
  );
}

export default MoreInfoModal;
