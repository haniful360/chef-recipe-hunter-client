import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            

        ]
    },
]);

export default router;