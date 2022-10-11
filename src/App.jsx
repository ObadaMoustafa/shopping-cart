import { Box, Button } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
