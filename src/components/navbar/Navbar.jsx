import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AppName from "./components/AppName";
import LoginAndCart from "./components/LoginAndCart";

function Navbar() {
  //write code here

  return (
    <Box bgcolor="primary.main" minHeight={100}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          height={100}
        >
          <Grid item>
            <AppName />
          </Grid>
          <Grid item>
            <LoginAndCart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Navbar;
