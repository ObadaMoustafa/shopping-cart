import {
  Card,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationMsg from '../../../components/ConfirmationMsg';
import { useDispatch } from 'react-redux';
import {
  addExtraItemAsync,
  deleteItemFromCart,
  minusItemAsync,
} from '../../../app-store/slices/shoppingCartSlice';
import { auth } from '../../../firebase/firebase';

function CartItem({ product }) {
  //write code here
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { image, totalPrice, id, items } = product;
  const dispatch = useDispatch();
  const uid = auth?.currentUser?.uid;
  function minusOneItem() {
    if (items === 1) {
      showHideDeleteConfirmation();
      return;
    }
    dispatch(minusItemAsync(id, uid));
  }

  function addOneItem() {
    dispatch(addExtraItemAsync(id, uid));
  }

  function showHideDeleteConfirmation() {
    setShowDeleteConfirmation((prev) => !prev);
  }

  function deleteItem() {
    dispatch(deleteItemFromCart(id, uid));
  }
  return (
    <Card
      sx={{
        p: 5,
        borderStartEndRadius: 20,
        borderEndStartRadius: 20,
        width: { xs: '100%', md: '50%' },
        maxHeight: 300,
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        {/* image */}
        <Grid item xs={12} sm={3}>
          <Link to={`/product/${id}`}>
            <CardMedia
              component="img"
              image={image}
              sx={{
                objectPosition: 'center',
                objectFit: 'contain',
                height: 100,
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Stack
            direction="row"
            justifyContent="space-between"
            justifyItems="center"
            alignItems="center"
            flexWrap="wrap"
          >
            {/* minus */}
            <IconButton onClick={minusOneItem}>
              <RemoveCircleIcon color="warning" fontSize="large" />
            </IconButton>
            {/* quantity */}
            <Typography variant="h5" color="primary" component="p">
              {items}
            </Typography>
            {/* plus */}
            <IconButton onClick={addOneItem}>
              <AddCircleIcon color="success" fontSize="large" />
            </IconButton>

            {/* delete */}
            <IconButton onClick={showHideDeleteConfirmation}>
              <DeleteIcon color="error" fontSize="large" />
            </IconButton>

            {/* delete confirmation message */}
            <ConfirmationMsg
              open={showDeleteConfirmation}
              onClose={showHideDeleteConfirmation}
              confirmationMsg="Are you sure to delete this item from shopping cart ?"
              mainFunc={deleteItem}
            />

            {/* Total Price */}
            <Typography
              variant="h5"
              color="success.dark"
              component="p"
              fontWeight={600}
              textAlign="right"
              mx="auto"
            >
              € {totalPrice.toFixed(2)}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CartItem;
