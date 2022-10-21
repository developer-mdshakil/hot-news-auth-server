import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../Pages/Catagory/Catagory/Catagory";
import Home from "../Pages/Home/Home/Home";



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
            path: '/catagory/:id',
            element: <Catagory></Catagory>,
            loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
        }
    ]
}
])