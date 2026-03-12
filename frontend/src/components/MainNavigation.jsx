import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';

const MainNavigation = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const  handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <>
            <h3>Welcome {user?.first_name} </h3>
            <div>
                <h3>DashBoard</h3>
                <h3>My Cases</h3>
                <h3>New Case</h3>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};

export default MainNavigation;