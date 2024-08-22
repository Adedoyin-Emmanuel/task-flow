import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@/store/useAuth";

interface IProtectedRoute {
  children: React.ReactNode;
  allowedRole: "admin" | "team member" | "project manager";
}
const ProtectedRoute = ({
  children,
  allowedRole: allowedRoles,
}: IProtectedRoute) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  const { role } = user;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
