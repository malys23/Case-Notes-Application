import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import GuestNav from './GuestNav.jsx';
import UserNav from './UserNav.jsx';

const NavBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const  handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <>  {!user && <GuestNav/>}
            {user && <UserNav user={user} handleLogout={handleLogout}/>}
        </>
    );
};

export default NavBar;