import { Box, Button } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { ref, set, update } from "firebase/database";
import { db } from "./firebase/firebase";

function App() {
  useEffect(() => {
    update(ref(db, "carts"), {
      productName: "keyboard",
    });
  }, []);
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
