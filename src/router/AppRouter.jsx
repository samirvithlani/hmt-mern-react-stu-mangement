import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "../components/common/Login"
import { HeroPage } from "../components/common/HeroPage"
import { StudentNavbar } from "../components/student/StudentNavbar"

const router = createBrowserRouter([
    {
        path:"/",
        element:<HeroPage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/student",
        element:<StudentNavbar/>
    }
])

const AppRouter = ()=>{

    return <RouterProvider router={router}></RouterProvider>
}
export default AppRouter