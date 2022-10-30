import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { wait } from "../utils/wait";

function ConfirmationMsg({ open, onClose, confirmationMsg, mainFunc }) {
  //write code here
  async function onCloseFunc() {
    await wait(300);
    onClose();
  }

  async function executeMainFunc() {
    await wait(300);
    mainFunc();
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.modal",
      }}
    >
      <Box
        bgcolor="primary.dark"
        width={{ xs: "90%", md: "50%" }}
        p={3}
        borderRadius={10}
      >
        <Typography variant="h6" color="primary.contrastText">
          {confirmationMsg}
        </Typography>
        <Stack mt={5} spacing={2} width="60%" mx="auto">
          <Button onClick={executeMainFunc} variant="outlined" color="error">
            Confirm
          </Button>
          <Button onClick={onCloseFunc} variant="contained">
            cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ConfirmationMsg;
