import { Outlet } from 'react-router-dom';
import AuthProvider from '../store/authProvider';

const RootLayout = () => {
    return (
        <>
            <h1>Welcome</h1>
            <main>
                <AuthProvider>
                    <Outlet/>
                </AuthProvider>
            </main>
        </>        
    );
};

export default RootLayout;