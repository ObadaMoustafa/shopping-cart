import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./themes/theme";
import { store } from "./app-store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart";
import ProductInfo from "./pages/product-info/ProductInfo";
import ProtectedRoute from "./pages/protected-route/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute isLoginPage>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shopping-cart"
              element={
                <ProtectedRoute>
                  <ShoppingCart />
                </ProtectedRoute>
              }
            />
            <Route path="/product/:id" element={<ProductInfo />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  </Router>
);
