import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { Context } from '../context/context';

function ProtektedRoutes() {
    const {tokenState}=useContext(Context)
  return tokenState?.token ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtektedRoutes