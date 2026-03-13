import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AuthProvider from '../store/authProvider';

const RootLayout = () => {
    return (
        <>
            <main>
                <AuthProvider>
                    <NavBar/>
                    <Outlet/>
                </AuthProvider>
            </main>
        </>        
    );
};

export default RootLayout;