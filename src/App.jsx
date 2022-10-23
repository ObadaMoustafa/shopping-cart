import { Box, Button, Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsAuth } from "./app-store/slices/isAuthSlice";
import { auth } from "./firebase/firebase";

function App() {
  const dispatch = useDispatch();

  //! Authentication listener
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user.uid);
      dispatch(setIsAuth(true));
    } else {
      dispatch(setIsAuth(false));
    }
  });

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
