import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
import { wait } from "../../../utils/wait";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../../app-store/slices/isAuthSlice";
import {
  addToCartAsync,
  isItemInCart,
} from "../../../app-store/slices/shoppingCartSlice";
import { auth } from "../../../firebase/firebase";
function OneProductCard({ product }) {
  //write code here
  const { title, price, rating, image, id } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const isInCart = useSelector(isItemInCart(id));
  async function goToProductInfoPage() {
    await wait(400);
    navigate(`/product/${id}`);
  }

  function goToShoppingCartPage() {
    navigate("/shopping-cart");
  }

  function addToShoppingCart() {
    if (!isAuth) {
      goToShoppingCartPage();
      return;
    }
    const uid = auth.currentUser.uid;
    dispatch(addToCartAsync(product, uid));
  }

  return (
    <Card
      sx={{
        height: { xs: 300, sm: 360 },
        borderRadius: "25px 0",
      }}
    >
      <CardActionArea onClick={goToProductInfoPage}>
        <CardHeader
          title={
            <Typography noWrap align="center" width="150px">
              {title}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          src={image}
          sx={{
            objectFit: "contain",
            height: { xs: 100, sm: 150 },
          }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            € {price}
          </Typography>
          <Rating precision={0.1} value={rating.rate} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isInCart ? (
          <IconButton onClick={goToShoppingCartPage}>
            <ShoppingCartCheckoutIcon fontSize="large" color="success" />
          </IconButton>
        ) : (
          <IconButton onClick={addToShoppingCart}>
            <AddShoppingCartIcon fontSize="large" color="secondary" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

export default OneProductCard;
