import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpProgress } from "../../app-store/slices/progressSlice";
import CartItem from "./components/CartItem";

function ShoppingCart() {
  //write code here
  const { shoppingCart } = useSelector(state => state);
  const totalPrice = shoppingCart
    .reduce((accumulator, element) => accumulator + element.totalPrice, 0)
    .toFixed(2);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(cleanUpProgress());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {!!shoppingCart.length ? (
        <Stack spacing={5} alignItems="center">
          {shoppingCart.map((product, index) => (
            <CartItem product={product} key={index} />
          ))}
          <Typography variant="h5">Total price: € {totalPrice}</Typography>
        </Stack>
      ) : (
        <h1>Shopping cart is empty</h1>
      )}
    </>
  );
}

export default ShoppingCart;
