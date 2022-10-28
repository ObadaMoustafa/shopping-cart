import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RenderError from "../../components/RenderError";
import { auth } from "../../firebase/firebase";

function Login() {
  //write code here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  function changeEmail(e) {
    setEmail(e.target.value);
    setErrorMsg(null);
  }
  function changePassword(e) {
    setPassword(e.target.value);
    setErrorMsg(null);
  }

  function login(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  }

  function signUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <Box sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}>
      {errorMsg && <RenderError errorMsg={errorMsg} />}
      <form onSubmit={login}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              type="email "
              placeholder="ex. email@domain.nl"
              onChange={changeEmail}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Password"
              name="password"
              type="password"
              placeholder="write your password"
              onChange={changePassword}
              fullWidth
            />
          </Grid>
        </Grid>
        <Stack spacing={2} alignItems="center" mt={3}>
          <Button color="primary" type="submit" variant="contained" fullWidth>
            Login
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={signUp}
            fullWidth
          >
            Sign up
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
