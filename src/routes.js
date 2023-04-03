import { createBrowserRouter } from "react-router-dom";
import App from './App';
import CheckAuth from './Utils/CheckAuth.js';
import Guest from './Utils/Guest.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Signin from './Pages/Signin.js';



export default createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <CheckAuth>
                        <Home />
                     </CheckAuth>
                ),
            },
            {
                path: "/login",
                element: (
                    <Guest>
                        <Login />
                    </Guest>
                ),
            },
            {
                path: "/signin",
                element: (
                    <Guest>
                        <Signin />
                    </Guest>
                ),
            },
        ],
    },

]);