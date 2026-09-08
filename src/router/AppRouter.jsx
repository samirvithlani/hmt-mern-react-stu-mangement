import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "../components/common/Login"
import { HeroPage } from "../components/common/HeroPage"
import { StudentNavbar } from "../components/student/StudentNavbar"
import { StudentExams } from "../components/student/StudentExams"
import { StudentAttendace } from "../components/student/StudentAttendace"

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
        element:<StudentNavbar/>,
        children:[
            {
                // /student/exams
                path:"exams",
                element:<StudentExams/>
            },
            {
                path:"attendance",
                element:<StudentAttendace/>
            }
        ]
    }
])

const AppRouter = ()=>{

    return <RouterProvider router={router}></RouterProvider>
}
export default AppRouter