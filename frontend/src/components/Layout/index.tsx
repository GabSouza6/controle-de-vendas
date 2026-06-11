import { Outlet } from "react-router-dom"
import SideBar from "../Sidebar/SideBar"

const Layout = () => {
    return(
        <div className="flex min-h-screen bg-gray-50">
            <SideBar/>
            <Outlet/>
        </div>
    )
}

export default Layout