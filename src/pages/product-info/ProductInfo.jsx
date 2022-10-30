import { Button, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../app-store/slices/productsSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addToCartAsync,
  isItemInCart,
} from "../../app-store/slices/shoppingCartSlice";
import { auth } from "../../firebase/firebase";
import { getIsAuth } from "../../app-store/slices/isAuthSlice";
import { cleanUpProgress } from "../../app-store/slices/progressSlice";

function ProductInfo() {
  //write code here
  const { id } = useParams();
  const product = useSelector(getProductById(id));
  const isAuth = useSelector(getIsAuth);
  const isInCart = useSelector(isItemInCart(Number(id)));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(cleanUpProgress());
  }, []);

  let productDetails = <></>;
  if (product) {
    function addToCart() {
      if (isAuth) {
        dispatch(addToCartAsync(product, auth.currentUser.uid));
        return;
      }

      navigate("/login");
    }
    const { category, description, image, price, rating, title } = product;
    productDetails = (
      <Box>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" color="text.primary" mb={2}>
              {title}
            </Typography>
            <Typography variant="h6" fontStyle="italic">
              {category}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia component="img" src={image} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack justifyContent="center" height="100%" spacing={5}>
              <Typography variant="h6" component="p">
                {description}
              </Typography>
              <Typography variant="h3" fontWeight={600} color="primary">
                € {price}
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={rating.rate}
                precision={0.5}
                size="large"
                readOnly
              />
              <Box>
                <Button
                  disabled={isInCart}
                  variant="contained"
                  startIcon={<AddShoppingCartIcon fontSize="small" />}
                  size="large"
                  sx={{ p: "5px 25px", fontSize: "20px" }}
                  onClick={addToCart}
                >
                  {isInCart ? "Already in Cart" : "Add to Cart"}
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return productDetails;
}

export default ProductInfo;
