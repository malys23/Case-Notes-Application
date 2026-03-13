import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const DashboardLayout = () => {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>        
    );
};

export default DashboardLayout;