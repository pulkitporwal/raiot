import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute({ userType }) {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  if (userType && !userType.includes(currentUser.userType)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
}
