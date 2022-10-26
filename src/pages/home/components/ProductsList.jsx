import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../../app-store/slices/productsSlice";
import OneProductCard from "./OneProductCard";

function ProductsList() {
  //write code here
  const allProducts = useSelector(getAllProducts);

  return (
    <>
      {!!allProducts.length && (
        <Grid container spacing={3}>
          {allProducts.map(product => (
            <Grid item key={product.id} xs={6} md={4} lg={3}>
              <OneProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default ProductsList;
