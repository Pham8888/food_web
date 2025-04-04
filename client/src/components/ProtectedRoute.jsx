// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  if (requiredRole && (!user || user.role !== requiredRole)) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;