import { NavLink, useNavigate } from 'react-router-dom';

const GuestNav = () => {
    const navigate = useNavigate();

    const handleLoginNav = () => {
        navigate('/');
    }

    return (
        <>  
            <NavLink to='/'>CN</NavLink>
            <NavLink to='/register'>Sign Up</NavLink>
            <button onClick={handleLoginNav}>Login</button>
        </>
    );
};

export default GuestNav;