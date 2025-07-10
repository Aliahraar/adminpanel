import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token') // یا هر راه دیگر برای تشخیص ورود

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
