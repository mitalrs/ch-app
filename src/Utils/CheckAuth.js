// import { useSelector } from "react";
import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () =>{
  const user = {loggedIn: false};
  return user && user.loggedIn;
};

export default function CheckAuth({children}) {
  
    const isAuth = useAuth();

      // const auth = useSelector(state => state.auth)


    return isAuth ? children : <Navigate to="/login" />;
}