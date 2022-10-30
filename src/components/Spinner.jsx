import { CircularProgress, Modal } from "@mui/material";
import React from "react";

function Spinner() {
  //write code here

  return (
    <Modal
      open
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.modal",
      }}
    >
      <CircularProgress />
    </Modal>
  );
}

export default Spinner;
