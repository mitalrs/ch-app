import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const useAuth = () =>{
    const user = {loggedIn: false};
    return user && user.loggedIn;
  };

export default function Guest({children}) {
    // const auth = useSelector(state => state.auth)
    const isAuth = useAuth();

    
    return !isAuth ? children :  <Navigate to="/" replace={true} />
}

