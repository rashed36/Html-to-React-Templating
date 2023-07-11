import { createBrowserRouter } from "react-router-dom"
import Home from "../components/Home"
import Main from "../layout/Main"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>, 
        errorElement: <h2>Not Found Page</h2>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <h2>About</h2>
            }
        ]
    }
])

