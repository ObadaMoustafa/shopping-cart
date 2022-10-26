import { Box, Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsAuth } from "./app-store/slices/isAuthSlice";
import { auth, db } from "./firebase/firebase";
import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { setProducts } from "./app-store/slices/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const starCountRef = ref(db, "products");
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      dispatch(setProducts(data));
    });

    //! Authentication listener
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setIsAuth(true));
      } else {
        dispatch(setIsAuth(false));
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
