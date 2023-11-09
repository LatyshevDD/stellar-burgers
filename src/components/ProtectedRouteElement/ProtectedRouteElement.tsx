import { useAppSelector } from "../../services/hooks";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ProtectedRoutePropsType } from "../../types/types";

const Protected = ({ onlyUnAuth = false, component }: ProtectedRoutePropsType) => {

  const user = useAppSelector((store) => store.userData.user);
  const location = useLocation();

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    const  from  = (location.pathname === '/order') ? '/' : location.pathname
    return <Navigate to="/login" state={{ from: from }} />;
  }
  
  return component;
};

export const OnlyAuth = Protected;

export const OnlyUnAuth = ({ component }: {component: JSX.Element}) => (
  <Protected onlyUnAuth={true} component={component} />
);
