import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const DashboardLayout = () => {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>        
    );
};

export default DashboardLayout;