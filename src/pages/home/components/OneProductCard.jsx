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
import { useNavigate } from "react-router-dom";
import { wait } from "../../../utils/wait";

function OneProductCard({ product }) {
  //write code here
  const { title, price, rating, image, id } = product;
  const navigate = useNavigate();
  async function goToProductInfoPage() {
    await wait(400);
    navigate(`/product/${id}`);
  }

  function goToShoppingCartPage() {
    navigate("/shopping-cart");
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
        <IconButton onClick={goToShoppingCartPage}>
          <AddShoppingCartIcon fontSize="large" color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default OneProductCard;
