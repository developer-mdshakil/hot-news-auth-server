import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../Pages/Catagory/Catagory/Catagory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Register from "../Pages/Register/Register";
import TermAndCondition from "../Pages/TermsAndCondition/TermAndCondition";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
{
    path: '/', 
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/news')
        },
        {
            path: '/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}}`)
        },
        {
            path: '/catagory/:id',
            element: <Catagory></Catagory>,
            loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/terms',
            element: <TermAndCondition></TermAndCondition>
        }
    ]
}
])