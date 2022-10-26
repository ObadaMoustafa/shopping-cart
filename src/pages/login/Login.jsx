import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { getIsAuth } from "../../app-store/slices/isAuthSlice";
import RenderError from "../../components/RenderError";
import { auth } from "../../firebase/firebase";

function Login() {
  //write code here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth);

  function changeEmail(e) {
    setEmail(e.target.value);
    setErrorMsg(null);
  }
  function changePassword(e) {
    setPassword(e.target.value);
    setErrorMsg(null);
  }

  function login() {
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
      {isAuth && <Navigate to="/" />}
      {errorMsg && <RenderError errorMsg={errorMsg} />}
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
        <Button color="primary" variant="contained" onClick={login} fullWidth>
          Login
        </Button>
        <Button color="secondary" variant="outlined" onClick={signUp} fullWidth>
          Sign up
        </Button>
      </Stack>
    </Box>
  );
}

export default Login;
