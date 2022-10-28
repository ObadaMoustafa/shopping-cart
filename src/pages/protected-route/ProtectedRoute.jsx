import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../../app-store/slices/isAuthSlice";

function ProtectedRoute({ children, isLoginPage = false }) {
  //write code here
  const isAuth = useSelector(getIsAuth);

  if (isLoginPage) return <>{isAuth ? <Navigate to="/" /> : children}</>;

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
