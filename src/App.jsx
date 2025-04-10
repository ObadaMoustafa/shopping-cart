import { Box, Container } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from './app-store/slices/isAuthSlice';
import { auth, db } from './firebase/firebase';
import { useEffect } from 'react';
import { child, get, onValue, ref } from 'firebase/database';
import { setProducts } from './app-store/slices/productsSlice';
import { setOrFirstAddToCart } from './app-store/slices/shoppingCartSlice';
import {
  getProgress,
  setError,
  setIsLoading,
} from './app-store/slices/progressSlice';
import RenderError from './components/RenderError';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector(getProgress);

  useEffect(() => {
    const starCountRef = ref(db, 'products');
    dispatch(setIsLoading(true));
    onValue(starCountRef, async (snapshot) => {
      const data = snapshot.val();
      dispatch(setProducts(data));
    });

    //! Authentication listener
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setIsAuth(true));
        // initialize the cart in redux
        const dbRef = ref(db);
        get(child(dbRef, `users/${user.uid}/cart`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              dispatch(setOrFirstAddToCart(snapshot.val()));
            } else {
              dispatch(setOrFirstAddToCart());
            }
          })
          .then(() => dispatch(setIsLoading(false)))
          .catch((error) => {
            dispatch(setError(error.message));
          });
      } else {
        dispatch(setIsAuth(false));
        dispatch(setOrFirstAddToCart());
        dispatch(setIsLoading(false));
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 5, pb: 5 }}>
        {error && <RenderError errorMsg={error} />}
        {isLoading && <Spinner />}
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
