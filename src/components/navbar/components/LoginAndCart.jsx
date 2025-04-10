import { Badge, Button, Grid, IconButton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../../../app-store/slices/isAuthSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { totalCartItems } from '../../../app-store/slices/shoppingCartSlice';
import { setIsLoading } from '../../../app-store/slices/progressSlice';

function LoginAndCart() {
  //write code here
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItemsQuantity = useSelector(totalCartItems);
  function Logout() {
    dispatch(setIsLoading(true));
    signOut(auth)
      .then(() => navigate('/login'))
      .finally(() => dispatch(setIsLoading(false)));
  }

  function goToShoppingCartPage() {
    navigate('/shopping-cart');
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
        <IconButton
          aria-label="cart"
          size="large"
          onClick={goToShoppingCartPage}
        >
          <Badge badgeContent={cartItemsQuantity} color="warning">
            <LocalMallIcon color="secondary" fontSize="large" />
          </Badge>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default LoginAndCart;
