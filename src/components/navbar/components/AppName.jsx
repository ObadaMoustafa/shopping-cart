import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AppName() {
  //write code here

  return (
    <Link to="/">
      <Typography
        variant="h4"
        component="h1"
        color="text.primary"
        fontWeight={800}
      >
        Shopping Online
      </Typography>
    </Link>
  );
}

export default AppName;
