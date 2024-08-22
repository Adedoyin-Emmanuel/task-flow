import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@/store/useAuth";

interface IProtectedRoute {
  children: React.ReactNode;
}
const AuthRoute = ({ children }: IProtectedRoute) => {
  const { isLoggedIn, user } = useAuth();

  if (isLoggedIn && user) {
    const { role } = user;
    switch (role) {
      case "admin":
        return <Navigate to="/admin/dashboard" replace />;
      case "project manager":
        return <Navigate to="/manager/dashboard" replace />;
      case "team member":
        return <Navigate to="/dashboard" replace />;
      default:
        return <Navigate to="/unauthorized" replace />;
    }
  }

  return children;
};

export default AuthRoute;
