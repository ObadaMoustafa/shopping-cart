import { Badge, Button, Grid, IconButton } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../../app-store/slices/isAuthSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

function LoginAndCart() {
  //write code here
  const isAuth = useSelector(getIsAuth);
  const navigate = useNavigate();
  function Logout() {
    signOut(auth).then(() => navigate("/login"));
  }

  function goToShoppingCartPage(){
    navigate('/shopping-cart')
  }
  return (
    <Grid container alignItems="center" height={100} spacing={3}>
      <Grid item>
        {isAuth ? (
          <Button color="secondary" onClick={Logout}>
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button color="secondary">Login</Button>
          </Link>
        )}
      </Grid>
      <Grid item>
        <IconButton aria-label="cart" size="large" onClick={goToShoppingCartPage}>
          <Badge badgeContent={90} color="warning">
            <LocalMallIcon color="secondary" fontSize="large" />
          </Badge>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default LoginAndCart;
