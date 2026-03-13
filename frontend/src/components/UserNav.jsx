import { NavLink } from 'react-router-dom';

const UserNav = ({user, handleLogout}) => {

    return (
        <>  
            <h3>Welcome {user.first_name} </h3>
            <div>
                <NavLink to='/dashboard'>DashBoard</NavLink>
                <NavLink to='/mycases'>My Cases</NavLink>
                <NavLink to='/new'>New Case</NavLink>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};

export default UserNav;