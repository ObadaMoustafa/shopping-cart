import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  cleanUpProgress,
  setError,
  setIsLoading,
} from '../../app-store/slices/progressSlice';
import { auth } from '../../firebase/firebase';

function Login() {
  //write code here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeEmail(e) {
    setEmail(e.target.value);
    dispatch(setError(null));
  }
  function changePassword(e) {
    setPassword(e.target.value);
    dispatch(setError(null));
  }

  function login(e) {
    e.preventDefault();
    dispatch(setIsLoading(true));
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setError(errorMessage));
      })
      .finally(() => dispatch(setIsLoading(false)));
  }

  function signUp() {
    dispatch(setIsLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setError(errorMessage));
        dispatch(setIsLoading(false));
        // ..
      });
  }

  useEffect(() => {
    return () => dispatch(cleanUpProgress());
    // eslint-disable-next-line
  }, []);
  return (
    <Box sx={{ width: { xs: '100%', md: '50%' }, mx: 'auto' }}>
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
