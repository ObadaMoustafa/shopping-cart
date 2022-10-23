import { Alert } from "@mui/material";
import React from "react";

function RenderError({ errorMsg }) {
  //write code here

  return (
    <Alert severity="error" sx={{ mb: 3 }}>
      {errorMsg}
    </Alert>
  );
}

export default RenderError;
